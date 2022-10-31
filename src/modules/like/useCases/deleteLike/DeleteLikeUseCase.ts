import { inject, injectable } from 'tsyringe'

import { ILikeRepository } from '@modules/like/repositories/ILikeRepository'
import { AppError } from '@shared/errors/AppError'

interface IExecute {
  id: string
}

@injectable()
export class DeleteLikeUseCase {
  constructor(
    @inject('LikeRepository')
    private likeRepository: ILikeRepository
  ) { }

  async execute({ id }: IExecute): Promise<void> {
    const like = await this.likeRepository.findById(id)
    if (!like) throw new AppError('Like não existe na base de dados', 404)

    await this.likeRepository.delete(id)
  }
}
