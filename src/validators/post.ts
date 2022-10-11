import Joi from 'joi';

export const postBodyValidator = Joi.object({
    message: Joi.string().required(),
});
