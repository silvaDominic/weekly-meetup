import { IDbConfig } from '../libs/models/db-config.interface';
import { DB_NAME, DB_PASSWORD, DB_USER, HOST_NAME } from '../libs/constants/environement.const';

export const DbConfig: IDbConfig = {
  host: HOST_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
};
