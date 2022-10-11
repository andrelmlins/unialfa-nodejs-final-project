import Joi from 'joi'

export const postCommentBodyValidator = Joi.object({
    idPost: Joi.string().required(),
    comment: Joi.string().min(5).max(50).required(),
})

export const commentBodyValidator = Joi.object({
    idPost: Joi.string().required(),
})
