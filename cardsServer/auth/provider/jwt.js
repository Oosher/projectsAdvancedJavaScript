const jwt = require ("jsonwebtoken");
const key = "SHISH"

const generateToken = (user)=>{

    const {_id,isBusiness,isAdmin,name:{first}} = user;

    const token = jwt.sign({_id,isBusiness,isAdmin,first},key);


    return token;

}



const newUser = {

    _id:"2131213",
    isBusiness:true,
    isAdmin:false,
    name:{first:"oushoush"}


}









const verifyToken  = (tokenFromClient)=>{


    try{

        const userData = jwt.verify(generateToken(newUser),key);

        return userData;


    }catch(err){

        console.log(err);


    }






}
console.log(generateToken(newUser));



console.log(jwt.verify(generateToken(newUser),key));

module.exports = {generateToken,verifyToken};