
import express from "express";

import students from "./dataBase.js";

const api = express();

api.get("/",function (req,res){

    console.log("hellos");
    res.send("hello")

});
api.get("/students",function (req,res){

    console.log("students");
    res.send(students)

});

api.listen(3000,()=>{
    
    console.log("the local port is 3000");

});
