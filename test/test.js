var assert = require('assert');

// Database prep
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('messages');


describe('Database data structure tests', function() {

  describe('Testing for presence of SQL tables critical for program operation', function() {

    it('The "comments" table should be present', function(done) {
      db.serialize(function () {
        db.all(`SELECT * FROM sqlite_master where type='table'`, function(err, rows) {
          const findings = rows.filter( i => i.name==='comments' );
          assert.equal( findings.length, 1);
          done();
        });
      });
    });

    it('The "messages" table should be present', function(done) {
      db.serialize(function () {
        db.all(`SELECT * FROM sqlite_master where type='table'`, function(err, rows) {
            const findings = rows.filter( i => i.name==='messages' );
            assert.equal( findings.length, 1);
            done();
        });
      });
    });

  });

  after(function() {
    // runs after all tests in this block
    // db.close();
  });

});
