import { User } from '../entities/User'
import { IUser } from '../entities/IUser'
import { IUserRepository } from '@modules/user/repositories/IUserRepository'
import { ICreateUserDTO } from '@modules/user/dtos/ICreateUserDTO'
import { IUpdateUserDTO } from '@modules/user/dtos/IUpdateUserDTO'
import { IFindUserDTO } from '@modules/user/dtos/IFindUserDTO'
import { IResponseFindUser } from '@modules/user/dtos/IResponse'

export class UserRepository implements IUserRepository {
  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = new User({
      name,
      email,
      password,
    })
    await user.save()
  }

  async update({ id, password }: IUpdateUserDTO): Promise<void> {
    await User.findOneAndUpdate({ id }, { password })
  }

  async find({ skip, limit }: IFindUserDTO): Promise<IResponseFindUser> {
    const users = await User.find().skip(skip).limit(limit)
    const totalCount = await User.countDocuments()

    return { users, totalCount }
  }

  async findById(id: string): Promise<IUser | null> {
    return await User.findById(id)
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return await User.findOne({ email })
  }
}
