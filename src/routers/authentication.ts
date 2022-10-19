import { Router } from 'express'
import { createValidator } from 'express-joi-validation'
import { login } from '../controllers/authentication/login'
import { refreshToken } from '../controllers/authentication/refresh.token'
import { register } from '../controllers/authentication/register'
import { updatePassword } from '../controllers/authentication/update.password'
import { user } from '../controllers/authentication/user'
import { loginValidator, registerValidator } from '../validators/authentication'

const privateRouter = Router()
const publicRouter = Router()
const validator = createValidator({ passError: true })

publicRouter.post('/register', validator.body(registerValidator), register)
publicRouter.post('/login', validator.body(loginValidator), login)
privateRouter.get('/me', user)
privateRouter.post('/refresh', refreshToken)
privateRouter.put('/update', updatePassword)

export const authRoutes = { privateRouter, publicRouter }
