const bookDB = require("../config/bookDB");
const liberyDB = require("../config/liberyDB");

function userReturn(amount, bookID) {
  const bookSQL = `UPDATE books SET amount = "${
    amount.amount + 1
  }" WHERE id = ${bookID}`;

  return new Promise((resolve, reject) => {
    bookDB.run(bookSQL, (error) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve();
    });
  });
}

function userLend(amount, bookID) {
  const bookSQL = `UPDATE books SET amount = "${
    amount.amount - 1
  }" WHERE id = ${bookID}`;

  return new Promise((resolve, reject) => {
    bookDB.run(bookSQL, (error) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve();
    });
  });
}

function liberyLend(userID, bookID) {
  const liberySQL = `INSERT INTO libery (user_id, book_id) VALUES (${userID}, ${bookID})`;

  return new Promise((resolve, reject) => {
    liberyDB.run(liberySQL, (error) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve();
    });
  });
}

function liberyReturn(liberyID) {
  const liberySQL = `DELETE FROM libery WHERE libery_id = ${liberyID}`;
  return new Promise((resolve, reject) => {
    liberyDB.run(liberySQL, (error) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve();
    });
  });
}
function getLiberyID(bookID, userID) {
  const liberySQL = `SELECT libery_id FROM libery WHERE user_id = ${userID} AND book_id = ${bookID}`;
  return new Promise((resolve, reject) => {
    liberyDB.get(liberySQL, (error, rows) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve(rows);
    });
  });
}

module.exports = {
  userReturn,
  userLend,
  liberyLend,
  liberyReturn,
  getLiberyID,
};
