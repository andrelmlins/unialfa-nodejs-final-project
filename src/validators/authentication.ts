import Joi from 'joi';

export const loginValidator = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(8).required(),
});

export const registerValidator = Joi.object({
  name: Joi.string().min(10).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});