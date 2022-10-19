import { Router } from 'express'
import { createValidator } from 'express-joi-validation'

import createPost from '../controllers/post/create'
import deletePost from '../controllers/post/delete'
import {
  listPostById,
  listPosts,
  listPostsByUser,
} from '../controllers/post/list'
import { postBodyValidator } from '../validators/post'

const privateRouter = Router()
const validator = createValidator({ joi: { convert: false }, passError: true })

privateRouter.post('/post', validator.body(postBodyValidator), createPost)
privateRouter.delete('/post/:id', deletePost)
privateRouter.get('/post', listPosts)
privateRouter.get('/me/post', listPostsByUser)
privateRouter.get('/post/:id', listPostById)

export default { privateRouter }
