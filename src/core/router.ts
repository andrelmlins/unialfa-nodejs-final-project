import { Router } from 'express'

import authenticationRouter from '../routers/authentication'
import postRouter from '../routers/post'
import likeRouter from '../routers/like'
import commentRouter from '../routers/comment'

const privateRouter = Router()
const publicRouter = Router()

publicRouter.use(authenticationRouter.publicRouter)

privateRouter.use(authenticationRouter.privateRouter)
privateRouter.use(postRouter.privateRouter)
privateRouter.use(likeRouter.privateRouter)
privateRouter.use(commentRouter.privateRouter)

export default { privateRouter, publicRouter }
