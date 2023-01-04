
import express from "express";


const api = express();

api.get("/",function (req,res){

    console.log("hellos");
    res.send("hello")

});

api.listen(3000,()=>{
    
    console.log("the local port is 3000");

});