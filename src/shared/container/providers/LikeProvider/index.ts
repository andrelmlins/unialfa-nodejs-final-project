import { container } from 'tsyringe'

import { ILikeRepository } from '@modules/like/repositories/ILikeRepository'
import { LikeRepository } from '@modules/like/infra/mongodb/repositories/LikeRepository'

container.registerSingleton<ILikeRepository>(
  'LikeRepository',
  LikeRepository
)