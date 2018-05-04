var assert = require('assert');

// Database prep
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('messages');


describe('Database data structure tests', function() {

  describe('Testing for presence of SQL tables critical for program operation', function() {

    it('The "comments" table should be present', function(done) {
      db.serialize(function () {
        db.all(`SELECT * FROM sqlite_master where type='table'`, function(err, rows) {
            assert.equal(rows.map(i=>i.name).filter(i=>i==='comments').length, 1);
            done();
        });
      });
    });

    it('The "messages" table should be present', function(done) {
      db.serialize(function () {
        db.all(`SELECT * FROM sqlite_master where type='table'`, function(err, rows) {
            assert.equal(rows.map(i=>i.name).filter(i=>i==='messages').length, 1);
            done();
        });
      });
    });




  });

});


// db.close();
