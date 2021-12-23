import { IRouter } from 'express';
import { IocContainer } from '../../libs/utils/ioc-container.util';
import {
  CONTROLLER_DELETE_USER,
  CONTROLLER_GET_ALL_USERS,
  CONTROLLER_GET_USER,
  CONTROLLER_REGISTER_USER,
  CONTROLLER_UPDATE_USER,
} from '../../libs/constants/dependency-names.const';

export class UserRouter {
  router: IRouter;

  constructor(userRouter: IRouter, iocContainer: IocContainer) {
    this.router = userRouter;
    // Definitions for ease of use
    const registerUserController = iocContainer[CONTROLLER_REGISTER_USER];
    const getUserController = iocContainer[CONTROLLER_GET_USER];
    const getAllUsersController = iocContainer[CONTROLLER_GET_ALL_USERS];
    const updateUserController = iocContainer[CONTROLLER_UPDATE_USER];
    const deleteUserController = iocContainer[CONTROLLER_DELETE_USER];

    this.router.post("/", registerUserController.registerUser.bind(registerUserController));
    this.router.put("/:userId", updateUserController.updateUser.bind(updateUserController));
    this.router.get("/:userId", getUserController.getUser.bind(getUserController));
    this.router.get("/", getAllUsersController.getAllUsers.bind(getAllUsersController));
    this.router.delete("/:userId", deleteUserController.deleteUser.bind(deleteUserController));
  }
}
