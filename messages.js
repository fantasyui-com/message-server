// Database prep
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('messages');

db.serialize(function () {

  db.run(`CREATE TABLE messages (
      id TEXT PRIMARY KEY,
      title TEXT,
      message TEXT,
      author TEXT,
      created DATETIME,
      read TEXT
    );
  `);

  db.run(`CREATE TABLE comments (
      id TEXT PRIMARY KEY,
      pid TEXT,
      author TEXT,
      message TEXT,
      created DATETIME
    );
  `);

})

db.close();
