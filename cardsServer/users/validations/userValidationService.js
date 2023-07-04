const loginValidation = require("./joi/loginValidation");
const registerValidation = require("./joi/registerValidation");

const validator = "Joi";

const validateUserLogin = (user) => {
  if (validator == "Joi") {
    const { error } = validateUserLogin(user);

    if (error) return error.details[0].message;
    return false;
  }
};

const validateUserRegister = (user) => {
  if (validator == "Joi") {
    const { error } = registerValidation(user);

    if (error) return error.details[0].message;
    return false;
  }
};

module.exports = {validateUserLogin,validateUserRegister};