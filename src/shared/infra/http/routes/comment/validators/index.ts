import { celebrate, Segments, Joi } from 'celebrate'

export const findComment = celebrate({
  [Segments.QUERY]: {
    post_id: Joi.string().hex().length(24),
    user_id: Joi.string().hex().length(24),
    skip: Joi.number().positive().integer().allow(0).required(),
    limit: Joi.number().positive().integer().allow(0).required()
  }
})

export const createComment = celebrate({
  [Segments.BODY]: {
    content: Joi.string().required().max(1000),
    post_id: Joi.string().hex().length(24).required()
  }
})

export const deleteComment = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().hex().length(24).required()
  }
})