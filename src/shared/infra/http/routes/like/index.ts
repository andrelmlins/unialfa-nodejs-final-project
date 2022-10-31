import { Router } from 'express'

import { FindLikeController } from '@modules/like/useCases/findLike/FindLikeController'
import { CreateLikeController } from '@modules/like/useCases/createLike/CreateLikeController'
import { DeleteLikeController } from '@modules/like/useCases/deleteLike/DeleteLikeController'

import { findLike, createLike, deleteLike } from './validators'
import { ensureAuthenticated } from '../../middlewares/isAuthenticated'

const likeRoutes = Router()

const findLikeController = new FindLikeController()
const createLikeController = new CreateLikeController()
const deleteLikeController = new DeleteLikeController()

likeRoutes.use(ensureAuthenticated)
likeRoutes.get('/', findLike, findLikeController.handle)
likeRoutes.post('/', createLike, createLikeController.handle)
likeRoutes.delete('/:id', deleteLike, deleteLikeController.handle)

export { likeRoutes }
