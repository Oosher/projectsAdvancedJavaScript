


const mongoose = require("mongoose");
const { DEFAULT_VALIDATION } = require("../../helpers/mongooseValidation");
const { url } = require("../../helpers/mongooseValidation");

const img = new mongoose.Schema({


    url:url,
    alt:DEFAULT_VALIDATION,

})





module.exports = img;