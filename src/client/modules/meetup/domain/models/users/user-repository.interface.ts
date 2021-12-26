export interface IUserRepository {
  getUserById(id: string): Promise<any>,
  deleteUser(id: string): Promise<any>,
  updateUserById(id: string): Promise<any>,
  createUser(email: string, password: string, displayName: string): Promise<any>,
}
