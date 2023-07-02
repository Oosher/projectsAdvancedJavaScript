const fs = require("fs/promises");
const logRequest = async (req, res, next) => {
  const data = `URL: ${req.url} Method: ${req.method} sent at ${new Date().toString()}\n`;
  try {
    await fs.appendFile("./logger/logger.txt", data);
  } catch (eror) {
    console.log(eror);
  }
  next();
};

module.exports = logRequest;
