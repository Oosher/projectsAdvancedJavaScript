
const express = require("express");

const chalk = require("chalk");
const cores = require("cors");


const morgan = require("morgan")


const api = express();

/* const whitelist = ["http://localhost:5500","http://localhost:5501"] */

/* api.use(cores({
  



   origin: function (origin,callback){
    if(whitelist.indexOf(origin)!==-1){

            callback(null,true);

    }

    else{
        callback(new Error("errr not allowed"))
    }
}
,
optionsSuccessStatus:200,

}));

 */






api.use(cores({

    origin:"http://localhost:5500",
})
)
api.use(morgan(":date[clf]-:url :method "))





api.get("/",(req,res)=>{

res.send("hello hello");


})


api.listen(4747,()=>{

    console.log(chalk.green("is listening"));

}) 
api.get("/hi",cores(),(req,res)=>{





    res.send("hello")


})