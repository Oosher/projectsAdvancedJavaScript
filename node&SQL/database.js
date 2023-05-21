

const mysql = require("mysql2/promise");


let connection ;


async function connectToDatabase(){

    if(!connection){
        try{
        connection = await mysql.createConnection({
            host:process.env.HOST,
            user: process.env.USER,
            password:process.env.PASSWORD,
            database: process.env.DATABASE_NAME,
            port :  process.env.DB_PORT});

            console.log( "successful connection");
        }
        catch(err){
            console.log(err);
            return Promise.reject(err.message)
        }
}
    return connection;

}

module.exports =  connectToDatabase;