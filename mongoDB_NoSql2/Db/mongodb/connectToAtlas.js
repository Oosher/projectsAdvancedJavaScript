const mongoose = require("mongoose");


    const userName = "osher10";

    const password =  "8264";

        mongoose.connect(`mongodb+srv://${userName}:${password}@cluster0.p3lhsyy.mongodb.net/`).then(()=>console.log("connectToDbLocally")).catch((err)=>console.log(err))
        




