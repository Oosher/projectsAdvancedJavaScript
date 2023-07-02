const express = require("express");
const customers = require("../customers/customersRuter");

const suppliers = require("../suppliers/suppliersRouter");

const router = express.Router();





router.use("/customers",customers);

router.use("/suppliers",suppliers);


router.use((req,res)=>{

    handleError(res,404,"req not found")

})



module.exports = router;