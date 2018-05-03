var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render( 'publish', Object.assign({ title: 'Express' }) );
});

/* PUT message . */
router.get('/', function(req, res, next) {

  res.send('respond with a resource');
});

module.exports = router;
