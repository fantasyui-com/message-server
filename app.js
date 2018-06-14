var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { URL } = require('url');
const hbs = require('hbs');



hbs.registerHelper('extname', function(url) {

  let candidate;

  const extname = path.extname(url)
  const basename = path.basename(url)
  const myURL = new URL(url);

  if(extname){
    candidate = path.extname(url).substr(1);
  } else if (myURL.hostname) {
    candidate = myURL.hostname;
  } else if (basename) {
    candidate = basename;
  } else {
    candidate = '???'
  }

  return candidate;
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var messageRouter = require('./routes/message');
var publishRouter = require('./routes/publish');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/message/:id', messageRouter);
app.use('/publish', publishRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
