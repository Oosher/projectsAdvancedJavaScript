const mongoose = require("mongoose");


const connectToDb = async ()=>{


    try{

        await mongoose.connect("mongodb://127.0.0.1:27017/gym");
        console.log("connected to the database");

    }catch(err){
            console.log( err);
        return err
    }



};



module.exports = connectToDb;