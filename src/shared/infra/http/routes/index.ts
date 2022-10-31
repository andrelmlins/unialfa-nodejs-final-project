import { Router } from 'express'

import { authenticateRoutes } from './authenticate'
import { userRoutes } from './user'
import { postRoutes } from './post'
import { commentRoutes } from './comment'
import { likeRoutes } from './like'

const router = Router()

router.use('/session', authenticateRoutes)
router.use('/user', userRoutes)
router.use('/post', postRoutes)
router.use('/comment', commentRoutes)
router.use('/like', likeRoutes)

export { router }
