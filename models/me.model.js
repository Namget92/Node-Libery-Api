const liberyDB = require("../config/liberyDB");

function getLiberyInfo(id) {
  const liberySQL = `SELECT book_id FROM libery WHERE user_id = ${id} ORDER BY book_id`;

  return new Promise((resolve, reject) => {
    liberyDB.all(liberySQL, (error, rows) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve(rows);
    });
  });
}

module.exports = {
  getLiberyInfo,
};
