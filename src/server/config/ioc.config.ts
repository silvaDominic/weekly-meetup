import express from 'express';
import { IocContainer } from '../libs/utils/ioc-container.util';
import { UserRepository } from '../infrastructure/repositories/user.repository';
import { MySqlDatabaseService } from '../infrastructure/database/database.service';
import { DbConfig } from './db.config';
import { UserRouter } from '../infrastructure/routes/users.router';
import { RegisterUserController } from '../infrastructure/controllers/user/register-user.controller';
import { GetAllUsersController } from '../infrastructure/controllers/user/get-all-users.controller';
import { GetUserController } from '../infrastructure/controllers/user/get-user.controller';
import {
  APP, CONFIG, CONTROLLER_DELETE_USER, CONTROLLER_GET_ALL_USERS,
  CONTROLLER_GET_USER, CONTROLLER_REGISTER_USER, CONTROLLER_UPDATE_USER, DB,
  REPO_USER, ROUTER_ROOT, ROUTER_USER,
} from '../libs/constants/dependency-names.const';
import { UpdateUserController } from '../infrastructure/controllers/user/update-user.controller';
import { DeleteUserController } from '../infrastructure/controllers/user/delete-user-controller';

function registerDependencies(container: IocContainer) {
  /* eslint-disable @typescript-eslint/no-shadow */
  // APP
  container.register(APP, () => express());

  // ROUTES
  container.register(ROUTER_ROOT, () => express.Router());
  container.register(ROUTER_USER, (container: IocContainer) => new UserRouter(express.Router(), container).router);

  // CONTROLLERS
  container.register(CONTROLLER_REGISTER_USER, (container: IocContainer) => new RegisterUserController(container[REPO_USER]));
  container.register(CONTROLLER_GET_ALL_USERS, (container: IocContainer) => new GetAllUsersController(container[REPO_USER]));
  container.register(CONTROLLER_GET_USER, (container: IocContainer) => new GetUserController(container[REPO_USER]));
  container.register(CONTROLLER_UPDATE_USER, (container: IocContainer) => new UpdateUserController(container[REPO_USER]));
  container.register(CONTROLLER_DELETE_USER, (container: IocContainer) => new DeleteUserController(container[REPO_USER]));

  // REPOS
  container.register(REPO_USER, (container: IocContainer) => new UserRepository(container[DB]));

  // DB
  container.register(CONFIG, () => DbConfig);
  container.register(DB, (container: IocContainer) => {
    const db = new MySqlDatabaseService(container[CONFIG]);
    return db.connect();
  });
}

export function InitIoCContainer() {
  const iocContainer = new IocContainer();
  registerDependencies(iocContainer);
  return iocContainer;
}
