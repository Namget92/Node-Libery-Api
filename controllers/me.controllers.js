const meModel = require("../models/me.model");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

async function getOneUser(req, res) {
  dotenv.config();
  const token = req.headers["authorization"];
  const jwtToken = token.split(" ")[1];
  const decoded = jwt.decode(jwtToken, process.env.TOKEN_SECRET);
  const libery = await meModel.getLiberyInfo(decoded.id);
  res.status(200).send([{ "User Info": decoded }, { "Lended books": libery }]);
}

module.exports = {
  getOneUser,
};
