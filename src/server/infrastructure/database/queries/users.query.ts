import { IDbQuery } from '../models/db-query.interface';
import { IUsersTable } from '../models/db.interface';

function insertUser(email: string, displayName: string, password: string): IDbQuery {
  return {
    command: 'INSERT INTO user (email, display_name, password) VALUES (?, ?, ?)',
    arguments: [email, displayName, password],
  };
}

function selectAllUsers(): IDbQuery {
  return {
    command: 'SELECT * FROM user;',
  };
}

function selectUser(id: string): IDbQuery {
  return {
    command: 'SELECT * FROM user WHERE id = ?',
    arguments: [id],
  };
}

function findUser(column: string, value: string): IDbQuery {
  return {
    command: 'SELECT * FROM user WHERE ?? = ?',
    arguments: [column, value],
  };
}

function updateUser(id: string, email: string, password: string, displayName: string): IDbQuery {
  const queryObject: IUsersTable = {};
  if (email !== undefined) queryObject.email = email;
  if (password !== undefined) queryObject.password = password;
  if (displayName !== undefined) queryObject.display_name = displayName;

  return {
    command: 'UPDATE user SET ? WHERE id = ?',
    arguments: [queryObject, id],
  };
}

function deleteUser(id: string): IDbQuery {
  return {
    command: 'DELETE FROM user WHERE id = ?',
    arguments: [id],
  };
}

function getLastInsertId(): IDbQuery {
  return {
    command: 'SELECT LAST_INSERT_ID()',
  };
}

export const userQueries = {
  insertUser,
  selectAllUsers,
  selectUser,
  findUser,
  updateUser,
  deleteUser,
  getLastInsertId,
};
