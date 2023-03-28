

console.log("hgellosa");






const joi = require("joi");

const userData = {name:"asd"};

const scheme = {name:joi.string().regex(/(?=.*[0-9])/)};

const joiScheme = joi.object(scheme);

const {error}  = joiScheme.validate(userData);


console.log(error.details[0].message);

console.log(/(?=.*[0-9])/.test(userData.name) );