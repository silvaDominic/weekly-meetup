import { IUserRepository } from '../domain/models/users/user-repository.interface';
import { ENDPOINT_USER } from '../../../libs/constants/endpoints.const';
import { HttpService } from '../../core/http.service';
import { CreateNewUserRequest } from '../application/models/new-user-request.dto';

export const UserRepository = {
  getUserById(id: string): Promise<any> {
    return HttpService.get(`${ENDPOINT_USER}/${id}`);
  },

  getUserByEmail() {},

/*  deleteUser(id: string): Promise<any> {
  },

  updateUserById(id: string): Promise<any> {
  },*/

  async createUser(email: string, password: string, displayName: string): Promise<any> {
    const payload: CreateNewUserRequest = new CreateNewUserRequest(email, password, displayName);
    return HttpService.post(ENDPOINT_USER, payload);
  },
};
