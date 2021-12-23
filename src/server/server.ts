import express, { IRouter, Request, Response } from 'express';
import path from 'path';
import { registerRoutes } from './infrastructure/routes';
import { InitIoCContainer } from './config/ioc.config';
import { APP, ROUTER_ROOT } from './libs/constants/dependency-names.const';

const iocContainer = InitIoCContainer();

// Middleware setup
iocContainer[APP].use(express.static('public'));
iocContainer[APP].use(express.json());
iocContainer[APP].use(express.urlencoded({
  extended: false,
}));

const routes: IRouter = registerRoutes(iocContainer, iocContainer[ROUTER_ROOT]);
// Routes
iocContainer[APP].use(routes);
// Fallback to client side routing
iocContainer[APP].use('*', (req: Request, res: Response) => res.sendFile(path.join(__dirname, '../public/index.html')));

const port = process.env.PORT || 3000;
iocContainer[APP].listen(port, () => console.log(`Server listening on port: ${port}`));
