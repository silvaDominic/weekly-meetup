export interface IUsersTable {
  id?: string,
  email?: string,
  password?: string,
  display_name?: string,
  createdAt?: Date;
}

export interface IMySQLResponse {
  affectedRows: number;
  insertId: number
}
