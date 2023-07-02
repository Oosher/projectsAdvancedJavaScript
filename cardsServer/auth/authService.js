const { handleError } = require("../utils/handleErrors");
const {generateToken,verifyToken} = require("./provider/jwt");



const tokenGenerator = "jwt";





const auth = (req,res,next)=>{

        if (tokenGenerator==="jwt" ) {
            try{

                
                if (!req.header("x-auth-token")) {
                    throw new Error("unothorized ")
                }


                if (!verifyToken) {
                    
                    throw new Error("unothorized ")

                }
                
                next()
            }catch(err){

                return handleError(res,500,err.message)

            }
        
        }



        





}









module.exports=auth;