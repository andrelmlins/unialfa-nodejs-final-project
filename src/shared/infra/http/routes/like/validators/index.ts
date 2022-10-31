import { celebrate, Segments, Joi } from 'celebrate'

export const findLike = celebrate({
  [Segments.QUERY]: {
    post_id: Joi.string().hex().length(24),
    user_id: Joi.string().hex().length(24),
    skip: Joi.number().positive().integer().allow(0).required(),
    limit: Joi.number().positive().integer().allow(0).required()
  }
})

export const createLike = celebrate({
  [Segments.BODY]: {
    post_id: Joi.string().hex().length(24).required()
  }
})

export const deleteLike = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().hex().length(24).required()
  }
})