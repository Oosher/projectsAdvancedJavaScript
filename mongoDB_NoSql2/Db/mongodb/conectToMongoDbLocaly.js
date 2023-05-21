const mongoose = require("mongoose");


        mongoose.connect("mongodb://127.0.0.1:27017/business_card_app").then(()=>console.log("connectToDbLocally")).catch((err)=>console.log(err));

