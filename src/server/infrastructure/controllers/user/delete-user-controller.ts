import { Request, Response } from 'express';
import { IUserRepository } from '../../../domain/models/users/user-repository.interface';

export class DeleteUserController {
  userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.userRepository.deleteUser(req.params.userId);
      return res.send(result);
    } catch (err: any) {
      console.log('Route Error: ', err);
      return res.status(500).send({ msg: 'DELETE USER Route Error', error: err.message });
    }
  }
}
