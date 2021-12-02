export interface IUsersTable {
  id?: string,
  username?: string,
  email?: string,
  password?: string,
  createdAt?: Date;
}

export interface IMySQLResponse {
  affectedRows: number;
  insertId: number
}
