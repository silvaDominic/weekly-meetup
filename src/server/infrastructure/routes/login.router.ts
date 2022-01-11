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
