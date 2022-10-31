import { ILike } from '../infra/mongodb/entities/ILike'
import { ICreateLikeDTO } from '../dtos/ICreateLikeDTO'
import { IFindLikeDTO } from '../dtos/IFindLikeDTO'
import { IResponseFindLike } from '../dtos/IResponse'

export interface ILikeRepository {
  create(data: ICreateLikeDTO): Promise<void>
  find(data: IFindLikeDTO): Promise<IResponseFindLike>
  findById(id: string): Promise<ILike | null>
  delete(id: string): Promise<void>
}
