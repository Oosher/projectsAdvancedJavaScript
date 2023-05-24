



const mongoose = require("mongoose");
const Card = require("./mongodb/card");





const createCard = async (normalizedCard) =>{


    try{
    let newCard = new Card(normalizedCard);

    newCard = await newCard.save(); 

    console.log(newCard);
}


catch(err){
    
    console.log(err);

}
}





const getCards = async ()=>{

    try{
        let card = await Card.find();

        console.log(await card);
    }
    catch(err){console.log(err);}



}


const getMyCards = async (id)=>{

    try{
        let card = await Card.find({_id:id});

        console.log( card);
    }
    catch(err){console.log(err);}



}


const getCard = async (id)=>{

    try{
        let card = await Card.findById(id);

        console.log( card);
    }
    catch(err){console.log(err);}



}

module.exports = {createCard,getCards,getCard,getMyCards};