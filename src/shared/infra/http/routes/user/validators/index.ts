import { celebrate, Segments, Joi } from 'celebrate'

export const createUser = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required().max(60),
    email: Joi.string().email().required().max(255),
    password: Joi.string().required().min(8)
  }
})
export const findUser = celebrate({
  [Segments.QUERY]: {
    skip: Joi.number().positive().integer().allow(0).required(),
    limit: Joi.number().positive().integer().allow(0).required()
  }
})

export const patchUser = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().hex().length(24).required()
  },
  [Segments.BODY]: {
    password: Joi.string().min(8)
  }
})