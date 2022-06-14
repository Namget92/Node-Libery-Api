const loggingDB = require("../config/loggingDB");

function addOneLogEntry(logg) {
  const sql = "INSERT INTO logg (path, method) VALUES (?, ?)";
  return new Promise((resolve, reject) => {
    loggingDB.run(sql, [logg[0], logg[1]], (error) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve();
    });
  });
}

module.exports = {
  addOneLogEntry,
};
