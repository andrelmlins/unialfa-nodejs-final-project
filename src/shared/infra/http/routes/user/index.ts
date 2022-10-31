import { Router } from 'express'

import { CreateUserController } from '@modules/user/useCases/createUser/CreateUserController'
import { FindUserController } from '@modules/user/useCases/findUser/FindUserController'
import { FindUserMeController } from '@modules/user/useCases/findUserMe/FindUserMeController'
import { PatchUserController } from '@modules/user/useCases/patchUser/PatchUserController'

import { createUser, findUser, patchUser } from './validators'
import { ensureAuthenticated } from '../../middlewares/isAuthenticated'

const userRoutes = Router()

const createUserController = new CreateUserController()
const findUserController = new FindUserController()
const findUserMeController = new FindUserMeController()
const patchUserController = new PatchUserController()

userRoutes.post('/', createUser, createUserController.handle)

userRoutes.use(ensureAuthenticated)
userRoutes.get('/', findUser, findUserController.handle)
userRoutes.get('/me', findUserMeController.handle)
userRoutes.patch('/:id', patchUser, patchUserController.handle)

export { userRoutes }
