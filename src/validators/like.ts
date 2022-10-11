import Joi from 'joi'

export const likeBodyValidator = Joi.object({
    idPost: Joi.string().required(),
})
