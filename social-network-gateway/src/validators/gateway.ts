import Joi from 'joi';

export const gatewayBodyValidator = Joi.object({
  content: Joi.string().max(600).required(),
  post_id: Joi.string().required()
});