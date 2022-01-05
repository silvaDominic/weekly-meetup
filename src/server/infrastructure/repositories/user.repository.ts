import { IDatabaseServiceInterface } from '../database/models/database-service.interface';
import { IDbQuery } from '../database/models/db-query.interface';
import { IUserRepository } from '../../domain/models/users/user-repository.interface';
import { UserEntity } from '../../domain/models/users/user.entity';
import { userQueries } from '../database/queries/users.query';
import { Email } from '../../domain/value-objects/email.value-object';

const COL_EMAIL = "email";
const COL_ID = "id";

export class UserRepository implements IUserRepository {
  db: IDatabaseServiceInterface;

  constructor(db: IDatabaseServiceInterface) {
    this.db = db;
  }

  public async findAllUsers(): Promise<Array<UserEntity>> {
    const query: IDbQuery = userQueries.selectAllUsers();
    const [users] = await this.db.query(query.command);

    return users;
  }

  public async findUserByEmail(email: string): Promise<UserEntity> {
    const query: IDbQuery = userQueries.findUser(COL_EMAIL, email);
    const [[user]] = await this.db.query(query.command, query.arguments);

    return new UserEntity(user.id, new Email(user.email), user.password, user.displayName);
  }

  public async findUserById(id: string): Promise<UserEntity> {
    const query: IDbQuery = userQueries.findUser(COL_ID, id);
    const [[user]] = await this.db.query(query.command, query.arguments);

    return new UserEntity(user.id, new Email(user.email), user.password, user.displayName);
  }

  public async updateUser(id: string, email: string, password: string, displayName: string): Promise<UserEntity> {
    const query: IDbQuery = userQueries.updateUser(id, email, password, displayName);
    return this.db.query(query.command, query.arguments);
  }

  public async createUser(email: string, password: string, displayName: string): Promise<UserEntity> {
    const insertQuery: IDbQuery = userQueries.insertUser(email, displayName, password);
    const [result] = await this.db.query(insertQuery.command, insertQuery.arguments);

    return new UserEntity(result.insertId, new Email(email), password, displayName);
  }

  public async deleteUser(id: string): Promise<string> {
    const query: IDbQuery = userQueries.deleteUser(id);
    return this.db.query(query.command, query.arguments);
  }

  public async exists(email: string): Promise<boolean> {
    const users = await this.findUserByEmail(email);
    return users !== undefined;
  }
}
