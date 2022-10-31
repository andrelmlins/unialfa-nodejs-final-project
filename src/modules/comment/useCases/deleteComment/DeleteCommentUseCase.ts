import { inject, injectable } from 'tsyringe'

import { ICommentRepository } from '@modules/comment/repositories/ICommentRepository'
import { AppError } from '@shared/errors/AppError'

interface IExecute {
  id: string
}

@injectable()
export class DeleteCommentUseCase {
  constructor(
    @inject('CommentRepository')
    private commentRepository: ICommentRepository
  ) { }

  async execute({ id }: IExecute): Promise<void> {
    const comment = await this.commentRepository.findById(id)
    if (!comment) throw new AppError('Comentário não existe na base de dados', 404)

    await this.commentRepository.delete(id)
  }
}
