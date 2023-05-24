

const mongoose = require('mongoose');

const { DEFAULT_VALIDATION, url } = require("../../helpers/mongooseValidation");
const img = require("./img")
const Address = require("./address");

const card = new mongoose.Schema({

title:DEFAULT_VALIDATION,
subtitle:DEFAULT_VALIDATION,
description:{...DEFAULT_VALIDATION , maxlength:1024},
email:{type:String,unique:true},
web:url,
image:img,
bizNumber:{
    type:Number,
    required:true,
    minlength:7,
    maxlength:7,
},
address:Address,

likes:[String],

createdIn:{type:Date, default: Date.now()},

user_id:{
    type:mongoose.Schema.Types.ObjectId,
},


});

const Card = mongoose.model("card",card);


module.exports = Card;