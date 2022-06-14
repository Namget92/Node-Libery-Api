const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(
  morgan("common", {
    stream: fs.createWriteStream(path.join(__dirname, "access.log"), {
      flags: "a",
    }),
  })
);

const booksRouter = require("./routers/books.router");
const authRouter = require("./routers/auth.router");
const usersRouter = require("./routers/users.router");
const me = require("./routers/me.router");

app.use(bodyParser.json());

app.use(usersRouter);
app.use(authRouter);
app.use(booksRouter);
app.use(me);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
