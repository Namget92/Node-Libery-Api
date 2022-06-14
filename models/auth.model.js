const userDB = require("../config/userDB");

function authRegister(user) {
  const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

  return new Promise((resolve, reject) => {
    userDB.run(sql, [user.username, user.email, user.password], (error) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve();
    });
  });
}

function authLogin(email) {
  const sql = "SELECT * FROM users WHERE email = ?";

  return new Promise((resolve, reject) => {
    userDB.get(sql, email, (error, rows) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }
      resolve(rows);
    });
  });
}

module.exports = {
  authRegister,
  authLogin,
};
