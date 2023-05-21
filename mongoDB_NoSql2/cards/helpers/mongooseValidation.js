


const mongoose  = require("mongoose");

const url= {

    type:String,
    lowercase:true,
    match:[/^(?:(?:https?|ftp):\/\/)?(?:www\.)?([a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)+)(?:\/[\w#!:.?+=&%@!-]*)?$/,"Invalid url"],
    trim:true,

}





const DEFAULT_VALIDATION= {

    type:String,
    required:true,
    minlength:2,
    maxlength:256,
    lowercase:true,
    trim:true,

}






module.exports = {url,DEFAULT_VALIDATION}