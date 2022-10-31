import { container } from 'tsyringe'

import { ICommentRepository } from '@modules/comment/repositories/ICommentRepository'
import { CommentRepository } from '@modules/comment/infra/mongodb/repositories/CommentRepository'

container.registerSingleton<ICommentRepository>(
  'CommentRepository',
  CommentRepository
)