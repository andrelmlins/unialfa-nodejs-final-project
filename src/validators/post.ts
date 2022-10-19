import Joi from 'joi';

export const postBodyValidator = Joi.object({
  title: Joi.string().required(),
  text: Joi.string().required()
})