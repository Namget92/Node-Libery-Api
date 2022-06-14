const model = require("../models/logging.model");

async function logging(req, res, next) {
  const path = req.path;
  const method = req.method;
  await model.addOneLogEntry([path, method]);
  next();
}

module.exports = logging;
