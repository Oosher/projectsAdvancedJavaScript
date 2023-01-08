
import express from "express";

import cors from "cors";

import randObj  from "./dataBase.js";

const api = express();

api.use(
    cors({
        origin:"127.0.0.1",
    })
);


api.get("/",function(req,res){

    res.send("nuds");

});

//added a method of finding a request by the obj key name and not by a specific parameter

api.get("/randobj/:objName",function(req,res){

    let indexOfName =randObj.findIndex((obj)=>{
        return Object.keys(obj) == req.params.objName;
    });

    console.log(indexOfName);
    if (indexOfName==-1) {
        
        res.status(404).send("param not fount");
        
    }
    
    res.send(randObj[indexOfName]);
    
    
    console.log(Object.keys(randObj[2])[0]);

});


api.listen(3000,function(){
    console.log("server is working");
})