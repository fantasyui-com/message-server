var assert = require('assert');

// Database prep
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database.sqlite3');


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

  describe('Testing for presence of minimum viable data set', function() {

    it('There should be some messages in the "messages" table', function(done) {
      db.serialize(function () {
        db.all(`SELECT * FROM messages;`, function(err, rows) {
          assert.equal( rows.length > 0, true);
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
