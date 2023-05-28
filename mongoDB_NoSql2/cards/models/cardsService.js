



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


const updateCard = async (cardId, normalizedCard )=>{


    try{
        let card = await Card.updateOne({_id:cardId},{$set:normalizedCard});

        console.log( card);
    }
    catch(err){console.log(err);}



}




const likeCard = async (cardId, userId )=>{


    try{
        let card = await Card.findById(cardId);

        if (card) {
            

        if (card.likes.includes(userId)) {

            let card = await Card.findByIdAndUpdate(cardId,{$pull:{likes:userId}},{new:true});
            console.log(card);
        }
        else {
                let card = await Card.findByIdAndUpdate(cardId,{$push:{likes:userId}},{new:true});
                console.log(card);
        }
    }

    }
    
    catch(err){console.log(err);}



}



module.exports = {createCard,getCards,getCard,getMyCards,updateCard,likeCard};