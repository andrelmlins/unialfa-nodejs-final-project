import Joi from 'joi';

export const likeBodyValidator = Joi.object({
  post_id: Joi.string().required(),
  user_id: Joi.string().required()
});