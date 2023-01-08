
import express from "express";

import cors from "cors";

import randObj  from "./dataBase.js";

import bodyParser from "body-parser";

const api = express();

api.use(
    cors({
        origin:"*",
    }),
    bodyParser.json(),
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

//req.bode = {name:newName}

api.put("/randobj/:objName",function(req,res){
    let indexOfName =randObj.findIndex((obj)=>{
            return Object.keys(obj) == req.params.objName;
        });

        console.log(req.body);

    randObj[indexOfName]=req.body;
    
    res.status(200).send(randObj);

});


api.post("/randobj",(req,res)=>{

randObj.push(req.body);

res.send(randObj);

});

api.listen(3000,function(){
    console.log("server is working");
})