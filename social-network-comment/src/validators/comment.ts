import Joi from 'joi';

export const commentBodyValidator = Joi.object({
  content: Joi.string().max(600).required(),
  post_id: Joi.string().required()
});