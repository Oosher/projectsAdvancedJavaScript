



const workEnvironment = (workspace)=>{


    if (workspace==="development") {
        
        require("./mongodb/conectToMongoDbLocaly");

    }


    if (workspace==="production") {

        require("./mongodb/connectToAtlas");

    }

}


module.exports = workEnvironment;