import { IComment } from '../infra/mongodb/entities/IComment'
import { ICreateCommentDTO } from '../dtos/ICreateCommentDTO'
import { IFindCommentDTO } from '../dtos/IFindCommentDTO'
import { IResponseFindComment } from '../dtos/IResponse'

export interface ICommentRepository {
  create(data: ICreateCommentDTO): Promise<void>
  find(data: IFindCommentDTO): Promise<IResponseFindComment>
  findById(id: string): Promise<IComment | null>
  delete(id: string): Promise<void>
}
