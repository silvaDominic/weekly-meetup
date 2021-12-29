import { UserEntity } from './user.entity';

export interface IUserRepository {
  findAllUsers(): Promise<Array<UserEntity>>
  findUserByEmail(email: string): Promise<Array<UserEntity>>
  findUserById(id: string): Promise<UserEntity>
  deleteUser(id: string): Promise<string>
  updateUser(id: string, email: string, password: string, displayName: string): Promise<UserEntity>
  createUser(email: string, displayName: string, password: string): Promise<UserEntity>
  exists(email: string): Promise<boolean>
}
