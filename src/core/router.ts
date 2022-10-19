import { Router } from 'express'

import { authRoutes } from '../routers/authentication'
import commentRouter from '../routers/comment'
import likeRouter from '../routers/like'
import postRouter from '../routers/post'

const privateRouter = Router()
const publicRouter = Router()

publicRouter.use(authRoutes.publicRouter)
privateRouter.use(authRoutes.privateRouter)

privateRouter.use(postRouter.privateRouter)
privateRouter.use(commentRouter.privateRouter)
privateRouter.use(likeRouter.privateRouter)

export default { privateRouter, publicRouter }
