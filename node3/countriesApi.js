const fs = require("fs/promises");

const axios = require("axios");

const express = require("express");
const api = express();
const cardRouts = require("./cardRouts");

const router = express.Router();


api.use("/users",cardRouts);


api.use((err,req,res,next)=>{

    res.status.send("404 not found")

})




/* 
const handleError = require("./utils/errorHandler")


api.use(express.static("./public"))

api.use(express.json());


api.use((req,res,next)=>{
        req.numNum=40;

    next();

})
 */


/* api.use((req,res,next)=>{

    const user = {userName:" kkjs",pass:"123445"}

    req.newUser = user;

    next();


}) */


/* api.get("/use/:par",(req,res)=>{

    console.log(req.headers);
    console.log(req.body);
    console.log(req.query);
    console.log(req.params.par);
    console.log(req.numNum);
    res.send("hello")

})


const saveDataFromApi = async () =>{    


    
    try{

        const res = await axios.get("https://restcountries.com/v3.1/all")

        const countries = res.data;

        await fs.writeFile("./countriesData.json",JSON.stringify(countries,null,2))


    }catch(err){


        console.log(err);
    }


}


api.get("/testest",(req,res)=>{
        try {
            user.name= "sdasd";
        }catch(err){
            return handleError(res,401,"user doesn't exist")
        }
})



api.use((err,req,res,next)=>{

    console.log(err);
    res.status(500).send("err")

    next(err);

}) */

api.listen(8181,()=>{

console.log( "server is listening");

})