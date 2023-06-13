const fs = require("fs/promises");

const axios = require("axios");

const express = require("express");
const api = express();

api.get("/",(req,res)=>{


    res.send("hello")

})


const saveDataFromApi =async () =>{


    
    try{

        const res = await axios.get("https://restcountries.com/v3.1/all")

        const countries = res.data;

        await fs.writeFile("./countriesData.json",JSON.stringify(countries,null,2))


    }catch(err){


        console.log(err);
    }


}



saveDataFromApi()


api.listen(8181,()=>{

console.log( "server is listening");

})