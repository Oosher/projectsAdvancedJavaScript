
const express = require("express");

const getDatabaseConnection = require("./database");

require("dotenv").config();




const api = express();


api.use(express.json());

api.get("/",(req,res)=>{

    res.send("hello there");

})
api.get("/employees", async (req,res)=>{
try{

    const connection  =  await getDatabaseConnection();

    const[row,field] = await  connection.execute(
        "select * from employees"
    );
        res.json(row);
}
catch(err){

    res.status(500).send("error in getting employees")

}

})






api.post("/employees", async(req,res)=>{


    const { lastName, firstName, birthDate, photo, notes } = req.body;

    try{

        const connection  =  await getDatabaseConnection();

        const [result] = await connection.execute(
        "INSERT INTO employees (LastName, FirstName, BirthDate, Photo, Notes) VALUES (?, ?, ?, ?, ?)",
        [lastName, firstName, birthDate, photo, notes]
        );
            res.status(201).json({ id: result.insertId });
    }
    catch(err){

        res.status(500).send("error in posting employees")

    }

})




api.get("/employees/:id", async(req,res)=>{


    try{

        const connection  =  await getDatabaseConnection();

        const [result] = await connection.execute(
        "select * from employees where EmployeeID = ? ",
        [req.params.id]
        );
     
            res.status(200).send(result);
    }
    catch(err){

        res.status(500).send("error in getting employee")

    }

})


api.put("/employees/:id", async(req,res)=>{


    const { lastName, firstName, birthDate, photo, notes } = req.body;

    try{

        const connection  =  await getDatabaseConnection();

        const [result] = await connection.execute(
        "update employees set LastName=?, FirstName=?, BirthDate=?, Photo=?, Notes=? where EmployeeID= ?",
        [lastName, firstName, birthDate, photo, notes,req.params.id]
        );
            res.status(201).send(result);
    }
    catch(err){

        res.status(500).send("error in puttimg employees")

    }

})



api.delete("/employees/:id", async(req,res)=>{


    try{

        const connection  =  await getDatabaseConnection();

        const [result] = await connection.execute(
        "delete from employees where EmployeeID = ? ",
        [req.params.id]
        );
            res.status(200).send(result);
    }
    catch(err){

        res.status(500).send("error in getting employee")

    }

})


/* api.post("/employees", async (req, res) => {
    const { lastName, firstName, birthDate, photo, notes } = req.body;
    try {
        const dbConnection = await getDatabaseConnection();
        const [result] = await dbConnection.execute(
        "INSERT INTO employees (LastName, FirstName, BirthDate, Photo, Notes) VALUES (?, ?, ?, ?, ?)",
        [lastName, firstName, birthDate, photo, notes]
        );
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occurred while creating an employee");
    }
}); */

const port = process.env.PORT || 3001;









api.listen(port, ()=>{console.log("is listening to port", port);})