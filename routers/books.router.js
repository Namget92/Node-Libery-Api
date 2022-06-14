const express = require("express");
const logging = require("../middlewares/logging");

const booksController = require("../controllers/books.controllers");

const booksRouter = express.Router();

booksRouter.get("/books", logging, booksController.getAllBooks);
booksRouter.post("/books", logging, booksController.addOneBook);
booksRouter.get("/books/:id", logging, booksController.getOneBook);
booksRouter.patch("/books/:id", logging, booksController.patchOneBook);
booksRouter.put("/books/:id", logging, booksController.putOneBook);
booksRouter.delete("/books/:id", logging, booksController.deleteOneBook);

module.exports = booksRouter;
