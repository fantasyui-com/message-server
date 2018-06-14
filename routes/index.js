const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database.sqlite3');

/* GET home page. */
router.get('/', function(req, res, next) {

  db.serialize(function () {

    reddit(db, {dist,after});

    db.all(`SELECT * FROM messages;`, function(err, data) {
      res.render('index', Object.assign({ meta: { title: '' }, data}) );
    });

  });

});

module.exports = router;
