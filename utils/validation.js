const Joi = require("joi");

const registerValidator = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    username: Joi.string().alphanum().min(3).max(50).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    address: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const loginValidator = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const couponValidator = (data) => {
  const schema = Joi.object({
    code: Joi.string().min(3).required(),
    description: Joi.string().min(3).max(1000),
    // _id: Joi.string(),
    percent_off: Joi.number().min(0).max(100).required(),
    available: Joi.boolean().required(),
    redeem_from: Joi.date().required(),
    redeem_to: Joi.date().min(Joi.ref("redeem_from")).required(),
  });

  return schema.validate(data);
};

module.exports = { registerValidator, loginValidator, couponValidator };
