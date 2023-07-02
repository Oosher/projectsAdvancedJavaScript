const express = require("express");
const chalk = require("chalk");
const cors = require("./middlewares/cors");
const logger = require("./logger/loggerService");
const router = require("./router/router");
const connectToDb = require("./DB/dbService");
const app = express();
const PORT = 8181;

app.use(cors);
app.use(logger);
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(chalk.yellow("The server is listening to port " + PORT));
  connectToDb();
});
