import { Router } from 'express'
import createLike from '../controllers/like/create'

const privateRouter = Router()

privateRouter.post('/post/:id/like', createLike)

export default { privateRouter }
