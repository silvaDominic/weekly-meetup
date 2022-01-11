import { Request, Response } from 'express';
import { LoginUserService } from '../../../application/usecases/login-user.service';
import { parseCredentials } from '../../../libs/utils/auth.util';

export class LoginUserController {
  loginUserService: LoginUserService;

  constructor(loginUserService: LoginUserService) {
    this.loginUserService = loginUserService;
  }

  public async loginUser(req: Request, res: Response): Promise<Response> {
    try {
      const auth = parseCredentials(req.headers.authorization);
      const user = await this.loginUserService.loginUser(auth);
      req.session.userId = user.id;
      return res.send(user);
    } catch (err) {
      console.log('Route Error: ', err);
      return res.status(500).send(JSON.stringify(err));
    }
  }
}
