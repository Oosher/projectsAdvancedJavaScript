const express = require("express");
const chalk = require("chalk");
const logRequest = require("./logger/handleAllRequests");
const handleError = require("./middleWares/handleErrors");
const router = require("./router/router");

const app = express();
const PORT = 8181;
app.use(express.json());

app.use(logRequest);

app.use(router)




app.use((err,req,res,next)=>{

 handleError(res,500,"server error")

})

app.listen(PORT, () => {
  console.log(chalk.yellow("The server is listening on port " + PORT));
});
