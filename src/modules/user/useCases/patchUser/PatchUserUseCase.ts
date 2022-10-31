import { inject, injectable } from 'tsyringe'
import { hash } from 'bcrypt'

import { IUserRepository } from '@modules/user/repositories/IUserRepository'
import { AppError } from '@shared/errors/AppError'

interface IExecute {
  id: string
  password: string
}

@injectable()
export class PatchUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) { }

  async execute({ id, password }: IExecute): Promise<void> {
    const user = await this.userRepository.findById(id)
    if (!user) throw new AppError('Usuário não existe na base de dados', 404)

    let passwordHash = ''
    if (password) passwordHash = await hash(password, 8)

    await this.userRepository.update({ id, password: passwordHash })
  }
}
