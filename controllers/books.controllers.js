const model = require("../models/books.model");

async function getAllBooks(req, res) {
  const result = await model.getAllBooks();
  res.status(200).send(result);
}

async function getOneBook(req, res) {
  const id = req.params.id;
  console.log(id);
  const result = await model.getOneBook(id);
  if (result === undefined) {
    res.status(404).send(`There is no book with id: ${id}.`);
  }
  res.status(200).send(result);
}
async function deleteOneBook(req, res) {
  const id = req.params.id;
  const result = await model.getOneBook(id);
  if (result === undefined) {
    res.status(400).send(`There is no book with id: ${id}.`);
  } else {
    await model.deleteOneBook(id);
    res.status(200).send(`The book with id: ${id} has been deleted.`);
  }
}

async function addOneBook(req, res) {
  if (req.body.title) {
    if (req.body.author) {
      if (req.body.published) {
        if (req.body.genre) {
          const { title, author, published, genre } = req.body;
          const book = [title, author, published, genre];
          await model.addOneBook(book);
          const result = await model.getAllBooks();
          res.status(201).send(result);
        } else {
          res.status(400).send("The books needs a genre (string).");
        }
      } else {
        res.status(400).send("The books needs a year of published (integer).");
      }
    } else {
      res.status(400).send("The books needs a author (string).");
    }
  } else {
    res.status(400).send("The books needs a title (string).");
  }
}

async function putOneBook(req, res) {
  const id = req.params.id;
  const findBook = await model.getOneBook(id);
  if (findBook === undefined) {
    res.status(404).send(`There is no book with id: ${id}.`);
  } else if (req.body.title) {
    if (req.body.author) {
      if (req.body.published) {
        if (req.body.genre) {
          let theOneBook = await model.getOneBook(id);
          const { title, author, published, genre } = req.body;
          theOneBook = [title, author, published, genre];
          await model.putOneBook(theOneBook, id);
          const result = await model.getAllBooks();
          res.status(200).send(result);
        } else {
          res.status(400).send("The books needs a genre (string).");
        }
      } else {
        res.status(400).send("The books needs a year of published (integer).");
      }
    } else {
      res.status(400).send("The books needs a author (string).");
    }
  } else {
    res.status(400).send("The books needs a title (string).");
  }
}

async function patchOneBook(req, res) {
  const id = req.params.id;
  const findBook = await model.getOneBook(id);
  if (findBook === undefined) {
    res.status(404).send(`There is no book with id: ${id}.`);
  } else if (
    req.body.title ||
    req.body.author ||
    req.body.published ||
    req.body.genre
  ) {
    if (req.body.title) {
      const title = req.body.title;
      await model.patchTitle(title, id);
    }
    if (req.body.author) {
      const author = req.body.author;
      await model.patchAuthor(author, id);
    }
    if (req.body.published) {
      const published = req.body.published;
      await model.patchPublished(published, id);
    }
    if (req.body.genre) {
      const genre = req.body.genre;
      await model.patchGenre(genre, id);
    }
    const result = await model.getAllBooks();
    res.status(200).send(result);
  } else {
    res
      .status(400)
      .send(
        "Bad patch request. At least one variable is needed (title, author, published or genre)."
      );
  }
}

module.exports = {
  getAllBooks,
  getOneBook,
  addOneBook,
  deleteOneBook,
  putOneBook,
  patchOneBook,
};
