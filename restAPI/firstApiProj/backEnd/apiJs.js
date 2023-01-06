
import express from "express";

import students from "./dataBase.js";

import cors from "cors";

const api = express();

api.use(
    cors({
        origin:"*",
    })
);

api.get("/",function (req,res){

    console.log("hellos");
    res.send("hello")

});
api.get("/students",function (req,res){

    console.log("students");
    res.send(students)

});


api.get("/students/:id",function(req,res){

    console.log(req.params.id);

    res.send(students[students.findIndex((student)=>{

        return student.id == req.params.id;

    })])

});


api.listen(3000,()=>{
    
    console.log("the local port is 3000");

});
