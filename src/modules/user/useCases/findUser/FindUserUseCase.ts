import { inject, injectable } from 'tsyringe'

import { IUserRepository } from '@modules/user/repositories/IUserRepository'
import { IResponseFindUserDTO, IResponseUserDTO } from '@modules/user/dtos/IResponse'

interface IExecute {
  skip: number
  limit: number
}

@injectable()
export class FindUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) { }

  async execute({ skip, limit }: IExecute): Promise<IResponseFindUserDTO> {
    const { users, totalCount } = await this.userRepository.find({ skip, limit })
    if (users.length) {
      const usersFormatted = users.map(item => {
        return { ...item?.toObject(), password: undefined }
      })

      return { users: usersFormatted as IResponseUserDTO[], totalCount }
    }

    return { users: [], totalCount: 0 }
  }
}
