const express = require("express");

const auth = require("../middlewares/authorization");
const logging = require("../middlewares/logging");

const userController = require("../controllers/users.controllers");

const userRouter = express.Router();

userRouter.post("/user/return", auth, logging, userController.userReturn);
userRouter.post("/user/lend", auth, logging, userController.userLend);

module.exports = userRouter;
