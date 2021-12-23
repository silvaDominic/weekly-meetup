import { Request, Response } from 'express';
import { IUserRepository } from '../../../domain/models/users/user-repository.interface';
import { UserRequest } from '../../../application/dtos/user-request.dto';
import { UserResponse } from '../../../application/dtos/user-response.dto';

export class UpdateUserController {
  userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const user = new UserRequest(req.body);
      const updatedUser = await this.userRepository.updateUser(req.params.userId, user.email, user.password, user.displayName);
      return res.send(new UserResponse(updatedUser));
    } catch (err: any) {
      console.log('Route Error: ', err);
      return res.status(500).send({ msg: 'PUT USER Route Error', error: err.message });
    }
  }
}
