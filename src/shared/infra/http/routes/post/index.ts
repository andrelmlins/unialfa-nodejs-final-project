import { Router } from 'express'

import { FindPostController } from '@modules/post/useCases/findPost/FindPostController'
import { CreatePostController } from '@modules/post/useCases/createPost/CreatePostController'
import { DeletePostController } from '@modules/post/useCases/deletePost/DeletePostController'

import { findPost, findPostMe, createPost, deletePost } from './validators'
import { ensureAuthenticated } from '../../middlewares/isAuthenticated'

const postRoutes = Router()

const findPostController = new FindPostController()
const createPostController = new CreatePostController()
const deletePostController = new DeletePostController()

postRoutes.use(ensureAuthenticated)
postRoutes.get('/', findPost, findPostController.handle)
postRoutes.get('/me', findPostMe, findPostController.handle)
postRoutes.post('/', createPost, createPostController.handle)
postRoutes.delete('/:id', deletePost, deletePostController.handle)

export { postRoutes }
