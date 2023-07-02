const express = require("express");


const router = express.Router();

router.get("/",(req,res)=>{


  res.send("suppliers")
  
})
router.post("/:new",(req,res)=>{


  res.send("suppliers")
  
})



module.exports =router;