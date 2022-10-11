import { Router } from 'express'
import { createValidator } from 'express-joi-validation'

import listLike from '../controllers/like/list'
import createLike from '../controllers/like/create'
import deleteLike from '../controllers/like/delete'

import { likeBodyValidator } from '../validators/like'

const privateRouter = Router()
const publicRouter = Router()
const validator = createValidator({ joi: { convert: false }, passError: true })

privateRouter.get('/like', validator.body(likeBodyValidator), listLike)
privateRouter.post('/like', validator.body(likeBodyValidator), createLike)
privateRouter.delete('/like', validator.body(likeBodyValidator), deleteLike)

export default { privateRouter, publicRouter }
