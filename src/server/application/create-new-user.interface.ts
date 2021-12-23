import { CreateNewUserRequest } from './dtos/new-user-request.dto';
import { UserEntity } from '../domain/models/users/user.entity';

export interface ICreateNewUserService {
  createUser(user: CreateNewUserRequest): Promise<UserEntity>
}
