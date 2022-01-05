/*
import jwt from 'jsonwebtoken';
import { Router } from 'express';
import db from '../../database';
import { JWT_SECRET } from '../../../libs/constants/environement.const';
import { compareHashSync } from '../../../libs/utils/hash.util';

export const loginRouter = Router();

loginRouter.post('/', async (req: any, res: any) => {
  const { email } = req.body;
  const { password } = req.body;
  try {
    const [userRows]: any = await db.userQueries.findUser('email', email);
    const user = userRows[0];
    if (user && compareHashSync(password, user.password)) {
      const token = jwt.sign(
        {
          userid: user.id,
          email: user.email,
          role: 1,
        },
        JWT_SECRET,
        { expiresIn: '5m' },
      );
      return res.status(200).send(token);
    }
    return res.status(401).send({ msg: 'Invalid credentials.' });
  } catch (err: any) {
    console.log('Route Error: ', err);
    return res.status(500).send({ msg: 'LOGIN USER Route Error', error: err.message });
  }
});
*/

import { IRouter } from 'express';
import { IocContainer } from '../../libs/utils/ioc-container.util';
import { CONTROLLER_LOGIN_USER } from '../../libs/constants/dependency-names.const';

export class LoginRouter {
  router: IRouter;

  constructor(loginRouter: IRouter, iocContainer: IocContainer) {
    this.router = loginRouter;
    // Definitions for ease of use
    const loginUserController = iocContainer[CONTROLLER_LOGIN_USER];

    this.router.post("/", loginUserController.loginUser.bind(loginUserController));
  }
}
