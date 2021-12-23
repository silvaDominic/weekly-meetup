import { Request, Response } from 'express';
import { IUserRepository } from '../../../domain/models/users/user-repository.interface';

export class GetUserController {
  userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async getUser(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.userRepository.findUserById(req.params.userId);
      return res.send(user);
    } catch (err: any) {
      console.log('Route Error: ', err);
      return res.status(500).send({ msg: 'GET USER Route Error', error: err.message });
    }
  }
}
