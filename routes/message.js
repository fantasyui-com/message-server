const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {

  const messages = JSON.parse(fs.readFileSync(path.join('./', 'messages.json'))));
  const message = messages.data.filter(message => message.id == req.param.id)

  res.render('index', Object.assign({ title: 'Express' },  );

});

module.exports = router;
