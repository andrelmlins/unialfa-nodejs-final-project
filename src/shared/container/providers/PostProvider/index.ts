import { container } from 'tsyringe'

import { IPostRepository } from '@modules/post/repositories/IPostRepository'
import { PostRepository } from '@modules/post/infra/mongodb/repositories/PostRepository'

container.registerSingleton<IPostRepository>(
  'PostRepository',
  PostRepository
)