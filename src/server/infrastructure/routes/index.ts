import { IRouter } from 'express';
import { IocContainer } from '../../libs/utils/ioc-container.util';
import { ROUTER_USER } from '../../libs/constants/dependency-names.const';

export function registerRoutes(iocContainer: IocContainer, router: IRouter): IRouter {
  router.use('/api/users', iocContainer[ROUTER_USER]);
  return router;
}
