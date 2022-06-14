const userModel = require("../models/users.model");
const bookModel = require("../models/books.model");
const meModel = require("../models/me.model");

const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

async function userReturn(req, res) {
  if (req.body.bookID) {
    const { bookID } = req.body;
    const amount = await bookModel.getOneBookAmount(bookID);
    if (amount === undefined) {
      return res.status(400).send("This book dosn´t exist");
    }
    dotenv.config();
    const token = req.headers["authorization"];
    const jwtToken = token.split(" ")[1];
    const decoded = jwt.decode(jwtToken, process.env.TOKEN_SECRET);
    const userID = decoded.id;
    const libery = await meModel.getLiberyInfo(userID);
    const liberyID = await userModel.getLiberyID(bookID, userID);
    if (liberyID === undefined) {
      return res.status(400).send("You can´t return somthing you didn´t lend.");
    }
    await userModel.userReturn(amount, bookID);
    await userModel.liberyReturn(liberyID.libery_id);
    res.status(200).json(libery);
  } else {
    res.status(400).send("bookID is needed to return");
  }
}

async function userLend(req, res) {
  if (req.body.bookID) {
    const { bookID } = req.body;
    const amount = await bookModel.getOneBookAmount(bookID);
    if (amount === undefined) {
      return res.status(400).send("This book dosn´t exist");
    }
    if (amount.amount === 0) {
      return res.status(400).send("Out of stock");
    }
    dotenv.config();
    const token = req.headers["authorization"];
    const jwtToken = token.split(" ")[1];
    const decoded = jwt.decode(jwtToken, process.env.TOKEN_SECRET);
    const userID = decoded.id;
    await userModel.userLend(amount, bookID);
    await userModel.liberyLend(userID, bookID);
    const libery = await meModel.getLiberyInfo(userID);
    res.status(200).send(libery);
  } else {
    res.status(400).send("bookID is needed to lend");
  }
}

module.exports = {
  userReturn,
  userLend,
};
