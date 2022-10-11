import { Router } from 'express'
import { createValidator } from 'express-joi-validation'

import listComment from '../controllers/comment/list'
import createComment from '../controllers/comment/create'
import deleteComment from '../controllers/comment/delete'

import { commentBodyValidator, postCommentBodyValidator } from '../validators/comment'

const privateRouter = Router()
const publicRouter = Router()
const validator = createValidator({ joi: { convert: false }, passError: true })

privateRouter.get('/comment', validator.body(commentBodyValidator), listComment)
privateRouter.post('/comment', validator.body(postCommentBodyValidator), createComment)
privateRouter.delete('/comment', validator.body(commentBodyValidator), deleteComment)

export default { privateRouter, publicRouter }
