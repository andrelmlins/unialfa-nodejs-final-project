import { IComment } from '../infra/mongodb/entities/IComment'

export interface IResponseFindComment {
  comments: IComment[]
  totalCount: number
}