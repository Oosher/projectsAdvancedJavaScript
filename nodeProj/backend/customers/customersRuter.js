const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{


    res.send("customers")
    
    })
router.post("/:new",(req,res)=>{


    res.send("customers")
  
})

module.exports =router;