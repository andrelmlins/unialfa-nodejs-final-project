import { Router } from 'express'

import { FindCommentController } from '@modules/comment/useCases/findComment/FindCommentController'
import { CreateCommentController } from '@modules/comment/useCases/createComment/CreateCommentController'
import { DeleteCommentController } from '@modules/comment/useCases/deleteComment/DeleteCommentController'

import { findComment, createComment, deleteComment } from './validators'
import { ensureAuthenticated } from '../../middlewares/isAuthenticated'

const commentRoutes = Router()

const findCommentController = new FindCommentController()
const createCommentController = new CreateCommentController()
const deleteCommentController = new DeleteCommentController()

commentRoutes.use(ensureAuthenticated)
commentRoutes.get('/', findComment, findCommentController.handle)
commentRoutes.post('/', createComment, createCommentController.handle)
commentRoutes.delete('/:id', deleteComment, deleteCommentController.handle)

export { commentRoutes }
