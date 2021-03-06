const bookDB = require("../config/bookDB");

function getAllBooks() {
  const sql = "SELECT * FROM BOOKS";

  return new Promise((resolve, reject) => {
    bookDB.all(sql, (error, rows) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve(rows);
    });
  });
}

function getOneBook(id) {
  const sql = "SELECT * FROM BOOKS WHERE id = ?";

  return new Promise((resolve, reject) => {
    bookDB.get(sql, id, (error, rows) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve(rows);
    });
  });
}
function getOneBookAmount(id) {
  const sql = "SELECT amount FROM BOOKS WHERE id = ?";

  return new Promise((resolve, reject) => {
    bookDB.get(sql, id, (error, rows) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve(rows);
    });
  });
}
function deleteOneBook(id) {
  const sql = "DELETE FROM BOOKS WHERE id = ?";

  return new Promise((resolve, reject) => {
    bookDB.run(sql, id, (error, rows) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve(rows);
    });
  });
}

function addOneBook(book) {
  const sql =
    "INSERT INTO books (title, author, published, genre, amount) VALUES (?, ?, ?, ?, ?)";
  return new Promise((resolve, reject) => {
    bookDB.run(sql, [book[0], book[1], book[2], book[3], book[4]], (error) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve();
    });
  });
}

function putOneBook(theOneBook, id) {
  const sql = `UPDATE books SET title = "${theOneBook[0]}", author = "${theOneBook[1]}", published = ${theOneBook[2]}, genre = "${theOneBook[3]}" WHERE id = ${id}`;
  return new Promise((resolve, reject) => {
    bookDB.run(sql, (error) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve();
    });
  });
}

function patchTitle(title, id) {
  const sql = `UPDATE books SET title = "${title}" WHERE id = ${id}`;
  return new Promise((resolve, reject) => {
    bookDB.run(sql, (error) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve();
    });
  });
}

function patchAuthor(author, id) {
  const sql = `UPDATE books SET author = "${author}" WHERE id = ${id}`;
  return new Promise((resolve, reject) => {
    bookDB.run(sql, (error) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve();
    });
  });
}

function patchPublished(published, id) {
  const sql = `UPDATE books SET published = ${published} WHERE id = ${id}`;
  return new Promise((resolve, reject) => {
    bookDB.run(sql, (error) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }

      resolve();
    });
  });
}

function patchGenre(genre, id) {
  const sql = `UPDATE books SET genre = "${genre}" WHERE id = ${id}`;
  return new Promise((resolve, reject) => {
    bookDB.run(sql, (error) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve();
    });
  });
}

function patchAmount(amount, id) {
  const sql = `UPDATE books SET amount = "${amount}" WHERE id = ${id}`;
  return new Promise((resolve, reject) => {
    bookDB.run(sql, (error) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve();
    });
  });
}

module.exports = {
  getAllBooks,
  getOneBook,
  addOneBook,
  deleteOneBook,
  putOneBook,
  patchAuthor,
  patchTitle,
  patchPublished,
  patchGenre,
  patchAmount,
  getOneBookAmount,
};
