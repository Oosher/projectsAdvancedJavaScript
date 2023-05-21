

const { string } = require("joi");
const connectToDb = require ("./connectTodb");


const mongoose  = require("mongoose");

connectToDb();





const customerSchema = new mongoose.Schema({

    name:String,
    email:{
        type:String,
    uniq:true,
    lowercase:true,
}

});


const Customers = mongoose.model("Customers",customerSchema);

const createCustomersCollection = async ()=>{

    try{
        await Customers.createCollection();
        console.log("Customers collection ahs been created ");


    }catch(err){

        console.log(err);
    }
}


const postCustomer = async (name,email)=>{

    try {

        const newCustomer = new Customers({name,email});

        await newCustomer.save();


        console.log("Customer added " , newCustomer);


    } catch(err){
        console.log(err);
    }

    
}

const getCustomer = async  (id)=>{

try{
    console.log(await Customers.findById(id).exec()); 


    return Customers.findById(id).exec();

}
catch(err){

    console.log( err);


    return err ;
}

}

const getCustomers = async  ()=>{

try{

    console.log(await Customers.find().exec());
    
    return await Customers.find().exec();

}
catch(err){

    console.log( err);


    return err;
}

}


const delateUser =  async (id)=>{

    try{


    return Customers.findByIdAndDelete(id).exec();

}
catch(err){

    console.log( err);


    return err ;
}



}


getCustomer("6465122b18f7855ce461626b");


delateUser("6465122b18f7855ce461626b")

getCustomers();


//create a function that updates the customers details


//postCustomer("amn","amn@amil.com");

//createCustomersCollection();