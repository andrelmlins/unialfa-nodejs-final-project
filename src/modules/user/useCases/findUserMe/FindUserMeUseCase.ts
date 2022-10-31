import { inject, injectable } from 'tsyringe'

import { IUserRepository } from '@modules/user/repositories/IUserRepository'
import { IResponseUserDTO } from '@modules/user/dtos/IResponse'

interface IExecute {
  user_requisition_id: string
}

@injectable()
export class FindUserMeUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) { }

  async execute({ user_requisition_id }: IExecute): Promise<IResponseUserDTO> {
    const user = await this.userRepository.findById(user_requisition_id)

    return { ...user?.toObject(), password: undefined }
  }
}
