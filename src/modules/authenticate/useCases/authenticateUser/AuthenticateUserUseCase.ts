import { inject, injectable } from 'tsyringe'
import { compare } from 'bcrypt'
import { generateTokens } from '@utils/generateTokens'

import { IUserRepository } from '@modules/user/repositories/IUserRepository'
import { IResponseTokens } from '@modules/authenticate/dtos/IResponse'
import { AppError } from '@shared/errors/AppError'

interface IExecute {
  email: string
  password: string
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) { }

  async execute({ email, password }: IExecute): Promise<IResponseTokens> {
    const user = await this.userRepository.findByEmail(email)
    if (!user) throw new AppError('E-mail ou senha incorreto(s)!')

    const passwordMatch = await compare(password, user.password)
    if (!passwordMatch) throw new AppError('E-mail ou senha incorreto(s)!')

    return generateTokens({ sub: user.id, email })
  }
}
