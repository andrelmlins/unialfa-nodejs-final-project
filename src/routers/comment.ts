import { Router } from 'express'
import createComment from '../controllers/comment/create'
import deleteComment from '../controllers/comment/delete'

const privateRouter = Router()

privateRouter.post('/post/:id/comment', createComment)
privateRouter.delete('/comment/:id', deleteComment)

export default { privateRouter }
