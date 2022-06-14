const express = require("express");
const logging = require("../middlewares/logging");

const authController = require("../controllers/auth.controllers");

const authRouter = express.Router();

authRouter.post("/auth/register", logging, authController.authRegister);
authRouter.post("/auth/login", logging, authController.authLogin);

module.exports = authRouter;
