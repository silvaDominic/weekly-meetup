import express from 'express';
import session from 'express-session';
import mySqlSession from 'express-mysql-session';
import { IocContainer } from '../libs/utils/ioc-container.util';
import { UserRepository } from '../infrastructure/repositories/user.repository';
import { MySqlDatabaseService } from '../infrastructure/database/database.service';
import { DbConfig } from './db.config';
import { SessionConfig } from './session.config';
import { UserRouter } from '../infrastructure/routes/users.router';
import { LoginRouter } from '../infrastructure/routes/login.router';
import { RegisterUserController } from '../infrastructure/controllers/user/register-user.controller';
import { GetAllUsersController } from '../infrastructure/controllers/user/get-all-users.controller';
import { GetUserController } from '../infrastructure/controllers/user/get-user.controller';
import {
  APP,
  CONTROLLER_DELETE_USER,
  CONTROLLER_GET_ALL_USERS,
  CONTROLLER_GET_USER,
  CONTROLLER_LOGIN_USER,
  CONTROLLER_REGISTER_USER,
  CONTROLLER_UPDATE_USER,
  DB,
  REPO_USER,
  ROUTER_LOGIN,
  ROUTER_ROOT,
  ROUTER_USER,
  SERVICE_CREATE_NEW_USER,
  SERVICE_LOGIN_USER,
  SESSION_STORE, SESSION,
} from '../libs/constants/dependency-names.const';
import { UpdateUserController } from '../infrastructure/controllers/user/update-user.controller';
import { DeleteUserController } from '../infrastructure/controllers/user/delete-user-controller';
import { CreateNewUserService } from '../application/usecases/create-new-user.service';
import { LoginUserController } from '../infrastructure/controllers/auth/login-user.controller';
import { LoginUserService } from '../application/usecases/login-user.service';

function registerDependencies(container: IocContainer) {
  /* eslint-disable @typescript-eslint/no-shadow */
  // APP
  container.register(APP, () => express());

  // ROUTES
  container.register(ROUTER_ROOT, () => express.Router());
  container.register(ROUTER_USER, (container: IocContainer) => new UserRouter(express.Router(), container).router);
  container.register(ROUTER_LOGIN, (container: IocContainer) => new LoginRouter(express.Router(), container).router);

  // CONTROLLERS
  container.register(CONTROLLER_REGISTER_USER, (container: IocContainer) => new RegisterUserController(container[SERVICE_CREATE_NEW_USER]));
  container.register(CONTROLLER_GET_ALL_USERS, (container: IocContainer) => new GetAllUsersController(container[REPO_USER]));
  container.register(CONTROLLER_GET_USER, (container: IocContainer) => new GetUserController(container[REPO_USER]));
  container.register(CONTROLLER_UPDATE_USER, (container: IocContainer) => new UpdateUserController(container[REPO_USER]));
  container.register(CONTROLLER_DELETE_USER, (container: IocContainer) => new DeleteUserController(container[REPO_USER]));
  container.register(CONTROLLER_LOGIN_USER, (container: IocContainer) => new LoginUserController(container[SERVICE_LOGIN_USER]));

  // REPOS
  container.register(REPO_USER, (container: IocContainer) => new UserRepository(container[DB]));

  // SERVICES
  container.register(SERVICE_CREATE_NEW_USER, (container: IocContainer) => new CreateNewUserService(container[REPO_USER]));
  container.register(SERVICE_LOGIN_USER, (container: IocContainer) => new LoginUserService(container[REPO_USER]));

  // DB
  container.register(DB, (container: IocContainer) => {
    const db = new MySqlDatabaseService(DbConfig);
    return db.connect();
  });
  container.register(SESSION, (container: IocContainer) => session({
    ...SessionConfig,
    store: container[SESSION_STORE],
  }));

  container.register(SESSION_STORE, (container: IocContainer) => {
    const MySqlStore = mySqlSession(session);
    return new MySqlStore({}, container[DB]);
  });
}

export function InitIoCContainer() {
  const iocContainer = new IocContainer();
  registerDependencies(iocContainer);
  return iocContainer;
}
