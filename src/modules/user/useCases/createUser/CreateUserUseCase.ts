import { inject, injectable } from 'tsyringe'
import { hash } from 'bcrypt'

import { IUserRepository } from '@modules/user/repositories/IUserRepository'
import { AppError } from '@shared/errors/AppError'

interface IExecute {
  name: string
  email: string
  password: string
}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) { }

  async execute({ name, email, password }: IExecute): Promise<void> {
    const user = await this.userRepository.findByEmail(email)
    if (user) throw new AppError('E-mail já cadastrado para um usuário')

    const passwordHash = await hash(password, 8)
    await this.userRepository.create({ name, email, password: passwordHash })
  }
}
