var assert = require('assert');

// Database prep
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('messages');


describe('Database Tests', function() {

  describe('table base', function() {
    it('tables should be present', function(done) {

      const tableCount = 0;

      db.serialize(function () {

        db.each(
          "SELECT * FROM sqlite_master where type='table'",
          function(err, row) {
            tableCount++;
            console.log("User id : "+row.id, row.dt);
          },
          function() {
            assert.equal(tableCount, 2);
            done();
          }
        );



      });

      // db.close();

    });
  });

});
