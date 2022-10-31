import { celebrate, Segments, Joi } from 'celebrate'

export const findPost = celebrate({
  [Segments.QUERY]: {
    user_id: Joi.string().hex().length(24),
    skip: Joi.number().positive().integer().allow(0).required(),
    limit: Joi.number().positive().integer().allow(0).required()
  }
})

export const findPostMe = celebrate({
  [Segments.QUERY]: {
    skip: Joi.number().positive().integer().allow(0).required(),
    limit: Joi.number().positive().integer().allow(0).required()
  }
})

export const createPost = celebrate({
  [Segments.BODY]: {
    title: Joi.string().required().max(40),
    content: Joi.string().required().max(1000),
    user_id: Joi.string().hex().length(24).required()
  }
})

export const deletePost = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().hex().length(24).required()
  }
})