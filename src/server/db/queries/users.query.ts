import {db} from '../../db';
import { v4 as uuidv4 } from 'uuid';

function insertUser(email: string, displayName: string, password: string,) {
  return db.query(`INSERT INTO users (id, email, display_name, password) VALUES (?, ?, ?, ?)`, [uuidv4(), email, displayName, password]);
}

function selectAllUsers() {
  return db.query(`SELECT * FROM users;`);
}

function selectUser(id: string) {
  return db.query(`SELECT * FROM users WHERE id = ?`, [id]);
}

function findUser(column: string, value: string) {
  return db.query(`SELECT * FROM users WHERE ?? = ?`, [column, value]);
}

function updateUser(id: string, user: {email: string, displayName: string, password: string}) {
  return db.query(`UPDATE users SET ? WHERE id = ?`, [user, id]);
}

function deleteUser(id: string) {
  return db.query(`DELETE FROM users WHERE id = ?`, [id]);
}

export const userQueries = {
  insertUser,
  selectAllUsers,
  selectUser,
  findUser,
  updateUser,
  deleteUser,
}