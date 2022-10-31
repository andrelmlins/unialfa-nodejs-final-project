import { container } from 'tsyringe'

import { IUserRepository } from '@modules/user/repositories/IUserRepository'
import { UserRepository } from '@modules/user/infra/mongodb/repositories/UserRepository'

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository
)