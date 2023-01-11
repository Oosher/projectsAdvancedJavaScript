
/* import express from "express"; */

const express =require("express");

/* import cors from "cors"; */

const cors =require("cors");



/* import bodyParser from "body-parser"; */

const bodyParser = require("body-parser");

/* import LocalStorage from "node-localstorage"; */



const api = express();

/* const localStorage = new LocalStorage.LocalStorage('./scratch'); */


const LocalStorage = require("node-localstorage").LocalStorage;

const localStorage = new LocalStorage('./scratch');

let arrayOfPeopleForNewsLEtter = [];

arrayOfPeopleForNewsLEtter = JSON.parse(localStorage.getItem("savedArray"));


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

    arrayOfPeopleForNewsLEtter.push(req.body);

    res.send(arrayOfPeopleForNewsLEtter);

    save();

});


api.listen(3000,function(){
    console.log("server is working");
})

function save (){

    localStorage.setItem("savedArray",JSON.stringify(arrayOfPeopleForNewsLEtter));

} 