import { v4 as uuidv4 } from 'uuid';
import { IDbQuery } from '../models/db-query.interface';
import { UserEntity } from '../../../domain/models/users/user.entity';
import { IUsersTable } from '../models/db.interface';

function insertUser(email: string, displayName: string, password: string): IDbQuery {
  return {
    command: 'INSERT INTO users (id, email, display_name, password) VALUES (?, ?, ?, ?)',
    arguments: [uuidv4(), email, displayName, password],
  };
}

function selectAllUsers(): IDbQuery {
  return {
    command: 'SELECT * FROM users;',
  };
}

function selectUser(id: string): IDbQuery {
  return {
    command: 'SELECT * FROM users WHERE id = ?',
    arguments: [id],
  };
}

function findUser(column: string, value: string) {
  return {
    command: 'SELECT * FROM users WHERE ?? = ?',
    arguments: [column, value],
  };
}

function updateUser(id: string, email: string, password: string, displayName: string) {
  const queryObject: IUsersTable = {};
  if (email !== undefined) queryObject.email = email;
  if (password !== undefined) queryObject.password = password;
  if (displayName !== undefined) queryObject.display_name = displayName;

  return {
    command: 'UPDATE users SET ? WHERE id = ?',
    arguments: [queryObject, id],
  };
}

function deleteUser(id: string) {
  return {
    command: 'DELETE FROM users WHERE id = ?',
    arguments: [id],
  };
}

export const userQueries = {
  insertUser,
  selectAllUsers,
  selectUser,
  findUser,
  updateUser,
  deleteUser,
};
