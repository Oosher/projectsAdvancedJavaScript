
import express from "express";

import cors from "cors";

import randObj  from "./dataBase.js";

const api = express();

api.use(
    cors({
        origin:"127.0.0.1",
    })
);


api.get("/",function(req,res){

    res.send(randObj);

});

api.listen(3000,function(){
    console.log("server is working");
})