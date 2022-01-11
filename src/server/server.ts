import express, { IRouter, Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import { registerRoutes } from './infrastructure/routes';
import { InitIoCContainer } from './config/ioc.config';
import { APP, ROUTER_ROOT, SESSION } from './libs/constants/dependency-names.const';

declare module 'express-session' {
  interface SessionData {
    userId: string;
  }
}

const iocContainer = InitIoCContainer();

// Middleware setup
iocContainer[APP].use(cors({
  origin: process.env.API_ROOT,
  credentials: true,
}));
iocContainer[APP].use(express.static('public'));
iocContainer[APP].use(iocContainer[SESSION]);
iocContainer[APP].use(express.json());
iocContainer[APP].use(express.urlencoded({
  extended: false,
}));
// DEVELOPMENT HEADER CONFIG
iocContainer[APP].use((req: Request, res: Response, next: () => any) => {
  res.header('Access-control-Allow-Origin', process.env.API_ROOT);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  res.header('Access-Control-Allow-Credentials', "true");
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

const routes: IRouter = registerRoutes(iocContainer, iocContainer[ROUTER_ROOT]);
// Routes
iocContainer[APP].use(routes);
// Fallback to client side routing
iocContainer[APP].use('*', (req: Request, res: Response) => res.sendFile(path.join(__dirname, '../public/index.html')));

const port = process.env.PORT || 3000;
iocContainer[APP].listen(port, () => console.log(`Server listening on port: ${port}`));
