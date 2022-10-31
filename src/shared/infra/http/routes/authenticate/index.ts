import { Router } from 'express'

import { AuthenticateUserController } from '@modules/authenticate/useCases/authenticateUser/AuthenticateUserController'
import { RefreshTokenController } from '@modules/authenticate/useCases/refreshToken/RefreshTokenController'

import { authenticateUser, refreshToken } from './validators'
import { ensureAuthenticated } from '../../middlewares/isAuthenticated'

const authenticateRoutes = Router()

const authenticateUserController = new AuthenticateUserController()
const refreshTokenController = new RefreshTokenController()

authenticateRoutes.post('/', authenticateUser, authenticateUserController.handle)

authenticateRoutes.use(ensureAuthenticated)
authenticateRoutes.post('/refresh-token', refreshToken, refreshTokenController.handle)

export { authenticateRoutes }
