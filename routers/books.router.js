const express = require("express");

const booksController = require("../controllers/books.controllers");

const booksRouter = express.Router();

booksRouter.get("/books", booksController.getAllBooks);
booksRouter.post("/books", booksController.addOneBook);
booksRouter.get("/books/:id", booksController.getOneBook);
booksRouter.patch("/books/:id", booksController.patchOneBook);
booksRouter.put("/books/:id", booksController.putOneBook);
booksRouter.delete("/books/:id", booksController.deleteOneBook);

module.exports = booksRouter;
