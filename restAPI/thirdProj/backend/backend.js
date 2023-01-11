
/* import express from "express"; */

const express =require("express");

/* import cors from "cors"; */

const cors =require("cors");



/* import bodyParser from "body-parser"; */

const bodyParser = require("body-parser");

/* import LocalStorage from "node-localstorage"; */



const api = express();

/* const localStorage = new LocalStorage.LocalStorage('./scratch'); */


const localStorage = require("node-localstorage").LocalStorage('./scratch')



api.use(
    cors({ 
        origin:"*",
    }),
    bodyParser.json(),
    express.static("public"),
);


api.get("/",(req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname +`/public/signUp.html`);

});

api.get("/SUCCESS",(req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname +`/public/success.html`);

});

api.get("/failure",(req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname +`/public/failure.html`);

});


api.post("/",(req,res)=>{

    console.log(req.body);

    res.send(req.body);

});


api.listen(3000,function(){
    console.log("server is working");
})

/* function save (){

    localStorage.setItem("savedArray",JSON.stringify(randObj));

} */