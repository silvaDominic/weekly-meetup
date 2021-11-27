import mysql2 from 'mysql2';
import {HOST_NAME, DB_USER, DB_PASSWORD, DB_NAME} from "../common/constants/environement";

export const db = mysql2.createPool({
  host: HOST_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
}).promise();

import { userQueries } from './queries/users.query';
export default {
  userQueries,
}