const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

function authorization(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send("Missing Token");
  }

  const jwtToken = token.split(" ")[1];

  dotenv.config();

  try {
    const auth = jwt.verify(jwtToken, process.env.TOKEN_SECRET);
    req.user = auth;
  } catch (error) {
    return res.status(401).send("Bad Token");
  }

  next();
}

module.exports = authorization;
