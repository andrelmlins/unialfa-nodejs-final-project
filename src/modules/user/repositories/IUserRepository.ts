import { IUser } from '../infra/mongodb/entities/IUser'
import { ICreateUserDTO } from '../dtos/ICreateUserDTO'
import { IUpdateUserDTO } from '../dtos/IUpdateUserDTO'
import { IFindUserDTO } from '../dtos/IFindUserDTO'
import { IResponseFindUser } from '../dtos/IResponse'

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>
  update(data: IUpdateUserDTO): Promise<void>
  find(data: IFindUserDTO): Promise<IResponseFindUser>
  findById(id: string): Promise<IUser | null>
  findByEmail(email: string): Promise<IUser | null>
}
