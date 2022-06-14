const sqlite3 = require("sqlite3").verbose();

const loggingDB = new sqlite3.Database("./loggingDB.sqlite", (error) => {
  if (error) {
    console.error(error.message);
    throw error;
  }
  const loggingStmt = `
    CREATE TABLE logg (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      path TEXT,
      method TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;

  loggingDB.run(loggingStmt, (error) => {
    if (error) {
      console.error(error.message);
      return;
    }
  });
});

module.exports = loggingDB;
