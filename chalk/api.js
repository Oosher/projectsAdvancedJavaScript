

const express = require("express");
const chalk = require("chalk");
const { json } = require("express/lib/response");

const Arrays = require( "./data.json")
const fs = require ("fs/promises")
const api = express();

    


const numbers = Arrays.Arrays;



console.log(Arrays.Arrays);

    api.use((req,res,next)=>{

    
    if(req.headers["user-agent"].includes("PostmanRuntime"))
    {
        return next()
    }


    return res.send("we only take requests from postman")

})


    api.get("/",(req,res)=>{

        res.send(numbers);

    });

    api.post("/add/:number",isNumber,checkEven ,(req,res,next)=>{

            numbers.push(+req.params.number)



 
    next();

    },writeArrayToJson)







    api.get("/div",(req,res)=>{

        if (checkNoZero) {
                return res.send((numbers[numbers.length-1]/numbers[numbers.length-2]).toString())
        }
        
        return res.send("cannot divide by zero");

    })

    api.get("/mul",(req,res)=>{


        res.send((numbers[numbers.length-1]*numbers[numbers.length-2]).toString())

    })

    api.get("/add",(req,res)=>{


        res.send((numbers[numbers.length-1]+numbers[numbers.length-2]).toString())

    })
    api.get("/sub",(req,res)=>{


        res.send((numbers[numbers.length-1]-numbers[numbers.length-2]).toString())

    })



    

    function checkNoZero ( ){

        if (numbers[numbers.length-1]===0) {
            
            return false
            
        }

        return true;

    }


    function checkEven(req,res,next){

        if (req.params.number%2!==0){

            return res.send("the number is not even")

        }

            return  next();



    }




    function isNumber (req,res,next){


    if (!isNaN( +req.params.number)) {

        return next();

    }

        return res.send("the input must be a number")
                
        

    }



    
    function  arrayExist(req,res,next){


        if (numbers.length < 2) {


            res.send("there are not enough numbers in the array")
            
        }

        return next();

    }



    

        api.use(["/div","/mul","/add","/sub"],arrayExist); 






            async function writeArrayToJson(req,res,next){



                try{
                        await fs.writeFile("./data.json",`{  "Arrays" : ${JSON.stringify(numbers)}}`);

                        res.send("the number has been added successfully")
                }catch(err){


                    res.send(err)

                    
                }

            }




    

api.listen(8181,()=>{

console.log(chalk.blackBright.bgBlueBright(  "server is listening"));

})