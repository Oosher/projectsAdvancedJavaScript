
import express from "express";

import cors from "cors";

import defaultRandObj  from "./dataBase.js";

import bodyParser from "body-parser";

import LocalStorage from "node-localstorage";



const api = express();

const localStorage = new LocalStorage.LocalStorage('./scratch');

let randObj = defaultRandObj;

if(localStorage.getItem("savedArray")!=""){

    randObj = JSON.parse(localStorage.getItem("savedArray"));

}


save();

api.use(
    cors({ 
        origin:"*",
    }),
    bodyParser.json(),

);


api.get("/",(req,res)=>{

    res.send("hallo");

});

api.listen(3000,function(){
    console.log("server is working");
})

function save (){

    localStorage.setItem("savedArray",JSON.stringify(randObj));

}