import { IDbConfig } from '../libs/models/db-config.interface';

export const DbConfig: IDbConfig = {
  host: process.env.HOST_NAME,
  port: parseInt(process.env.DB_PORT, 10),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
