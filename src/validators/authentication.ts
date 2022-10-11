import Joi from 'joi';

export const loginValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
});

export const registerValidator = Joi.object({
  name: Joi.string().min(5).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
});

export const resetPasswordValidator = Joi.object({
    password: Joi.string().min(3).required(),
    new_password: Joi.string().min(3).required(),
    confirm_new_password: Joi.string().min(3).required(),
  });
