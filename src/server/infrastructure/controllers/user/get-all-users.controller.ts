import { Request, Response } from 'express';
import { IUserRepository } from '../../../domain/models/users/user-repository.interface';

export class GetAllUsersController {
  userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async getAllUsers(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.userRepository.findAllUsers();
      return res.send(users);
    } catch (err: any) {
      console.log('Route Error: ', err);
      return res.status(500).send({ msg: 'GET ALL USERS Route Error', error: err.message });
    }
  }
}
