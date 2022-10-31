import { celebrate, Segments, Joi } from 'celebrate'

export const authenticateUser = celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required().max(255),
    password: Joi.string().required().max(255)
  }
})

export const refreshToken = celebrate({
  [Segments.BODY]: {
    refresh_token: Joi.string().required().max(255)
  }
})