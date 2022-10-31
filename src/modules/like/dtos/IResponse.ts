import { ILike } from '../infra/mongodb/entities/ILike'

export interface IResponseFindLike {
  likes: ILike[]
  totalCount: number
}