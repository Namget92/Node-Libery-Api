const sqlite3 = require("sqlite3").verbose();

const bookDB = new sqlite3.Database("./bookDB.sqlite", (error) => {
  if (error) {
    console.error(error.message);
    throw error;
  }
  const booksStmt = `
    CREATE TABLE books (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      title TEXT,
      author TEXT,
      published INTEGER,
      genre TEXT,
      amount INTEGER NOT NULL
    )
  `;

  bookDB.run(booksStmt, (error) => {
    if (error) {
      console.error(error.message);
      return;
    }
  });
});

module.exports = bookDB;
