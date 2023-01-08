
import express from "express";

import cors from "cors";

import defaultRandObj  from "./dataBase.js";

import bodyParser from "body-parser";

import LocalStorage from "node-localstorage";

const api = express();

const localStorage = new LocalStorage.LocalStorage('./scratch');

let randObj = defaultRandObj;

if(localStorage.getItem("savedArray")!=null){

    randObj = JSON.parse(localStorage.getItem("savedArray"));

}

save();

api.use(
    cors({ 
        origin:"*",
    }),
    bodyParser.json(),

);


api.get("/",function(req,res){

    res.send("nuds");

});

api.get("/randobj",function(req,res){

    res.send(randObj);

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

        
    save();

});


api.post("/randobj",(req,res)=>{

    randObj.push({...req.body,num:randObj.length+1});

    res.send(randObj);

    save();

});

api.delete("/randobj/:objName",(req,res)=>{

    let indexOfName =randObj.findIndex((obj)=>{
            return Object.keys(obj) == req.params.objName;
        });
        console.log(indexOfName);
        
    randObj.splice(indexOfName,1);

    res.send(randObj);

    save();

})

api.listen(3000,function(){
    console.log("server is working");
})

function save (){

    localStorage.setItem("savedArray",JSON.stringify(randObj));

}