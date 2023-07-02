const validateCardWithJoi = require("./Joi/validateCardWithJoi");

const validator = "Joi";

const validateCard = (card) => {
  if (validator == "Joi") {
    const { error } = validateCardWithJoi(card);
    if (error) return error.details[0].message;
    return false;
  }
};

module.exports = validateCard;
