const model = require("../models/auth.model");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

async function authRegister(req, res) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res
      .status(400)
      .send(
        "One or more of the following is missing. Username, email or password"
      );
  }
  const existingUser = await model.authLogin(email);
  if (existingUser) {
    return res.status(400).send("Email is alredy in use");
  }
  const user = { username, email, password: md5(password) };
  await model.authRegister(user);
  res
    .status(201)
    .send("Log in with your new account at http://localhost:4000/auth/login");
}

async function authLogin(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .send("One or more of the following is missing. Email or password");
  }
  const existingUser = await model.authLogin(email);
  if (!existingUser) {
    return res.status(400).send("Email or Password is incorrect");
  }
  const hashedPassword = md5(password);
  if (existingUser.password !== hashedPassword) {
    return res.status(400).send("Email or Password is incorrect");
  }
  dotenv.config();
  const token = jwt.sign(
    {
      id: existingUser.id,
      username: existingUser.username,
      email: existingUser.email,
    },
    process.env.TOKEN_SECRET
  );
  res
    .status(200)
    .send(
      "Use this token to access - /me - /user/return - /user/lend\n" + token
    );
}

module.exports = {
  authRegister,
  authLogin,
};
