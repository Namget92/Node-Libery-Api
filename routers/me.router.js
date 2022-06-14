const express = require("express");

const auth = require("../middlewares/authorization");
const logging = require("../middlewares/logging");

const meController = require("../controllers/me.controllers");

const meRouter = express.Router();

meRouter.get("/me", auth, logging, meController.getOneUser);

module.exports = meRouter;
