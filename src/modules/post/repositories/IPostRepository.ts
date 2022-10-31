import { IPost } from '../infra/mongodb/entities/IPost'
import { ICreatePostDTO } from '../dtos/ICreatePostDTO'
import { IFindPostDTO } from '../dtos/IFindPostDTO'
import { IResponseFindPost } from '../dtos/IResponse'

export interface IPostRepository {
  create(data: ICreatePostDTO): Promise<void>
  find(data: IFindPostDTO): Promise<IResponseFindPost>
  findById(id: string): Promise<IPost | null>
  delete(id: string): Promise<void>
}
