import { Response, Request } from 'express';
import { CreateNewUserRequest } from '../../../application/dtos/new-user-request.dto';
import { CreateNewUserService } from '../../../application/usecases/create-new-user.service';
import { UserResponse } from '../../../application/dtos/user-response.dto';

export class RegisterUserController {
  createUserService: CreateNewUserService;

  constructor(createUserService: CreateNewUserService) {
    this.createUserService = createUserService;
  }

  public async registerUser(req: Request, res: Response): Promise<Response> {
    try {
      const user = new CreateNewUserRequest(req.body);
      const newUser = await this.createUserService.createUser(user);
      return res.send(new UserResponse(newUser));
    } catch (err: any) {
      console.log('Route Error: ', err);
      return res.status(500).send(JSON.stringify(err));
    }
  }
}
