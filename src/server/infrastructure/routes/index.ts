import { IRouter } from 'express';
import { IocContainer } from '../../libs/utils/ioc-container.util';
import { ROUTER_LOGIN, ROUTER_USER } from '../../libs/constants/dependency-names.const';

export function registerRoutes(iocContainer: IocContainer, router: IRouter): IRouter {
  router.use('/api/users', iocContainer[ROUTER_USER]);
  router.use('/api/login', iocContainer[ROUTER_LOGIN]);
  return router;
}
