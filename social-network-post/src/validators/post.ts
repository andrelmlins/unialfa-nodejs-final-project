import Joi from 'joi';

export const postBodyValidator = Joi.object({
  title: Joi.string().max(50).required(),
  content: Joi.string().max(600).required(),
  user_id: Joi.string().required()
});