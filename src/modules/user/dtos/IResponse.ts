import { IUser } from '../infra/mongodb/entities/IUser'

export interface IResponseFindUser {
  users: IUser[]
  totalCount: number
}

export interface IResponseUserDTO {
  _id?: string
  name?: string
  email?: string
  password?: undefined
}

export interface IResponseFindUserDTO {
  users: IResponseUserDTO[]
  totalCount: number
}