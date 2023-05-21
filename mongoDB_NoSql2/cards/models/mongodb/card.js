

const mongoose = require("mongoose");
const { DEFAULT_VALIDATION, url } = require("../../helpers/mongooseValidation");
const Address = require("./address");

const card = new mongoose.Schema({

title:DEFAULT_VALIDATION,
subtile:DEFAULT_VALIDATION,
description:{...DEFAULT_VALIDATION , maxlength:1024},
web:url,
image:{
    type:Image
},
bizNumber:{
    required:true,
    minlength:7,
    maxlength:7,
},
address:Address,


likes:[String],


createdIn:{type:Date=Date.now()},

user_id:{
    type:mongoose.Schema.Types.ObjectId,
},


});


const Card = mongoose.model("card",card);


module.exports = Card;