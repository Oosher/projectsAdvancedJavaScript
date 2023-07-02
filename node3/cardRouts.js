
const express = require("express");

const chalk = require("chalk");


const router = express.Router();


router.get("/",(req,res)=>{




    console.log( "hello router");




    res.send("hello from router");
})


module.exports =router;
