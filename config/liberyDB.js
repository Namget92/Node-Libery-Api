const sqlite3 = require("sqlite3").verbose();

const liberyDB = new sqlite3.Database("./liberyDB.sqlite", (error) => {
  if (error) {
    console.error(error.message);
    throw error;
  }

  const liberyStmt = `
    CREATE TABLE libery (
      libery_id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      book_id INTEGER
    )
  `;

  liberyDB.run(liberyStmt, (error) => {
    if (error) {
      console.error(error.message);
      return;
    }
  });
});

module.exports = liberyDB;
