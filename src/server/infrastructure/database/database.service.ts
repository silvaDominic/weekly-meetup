import mysql2 from 'mysql2';
import { IDbConfig } from '../../libs/models/db-config.interface';
import { IDatabaseServiceInterface } from './models/database-service.interface';

export class MySqlDatabaseService implements IDatabaseServiceInterface {
  config: IDbConfig;
  connection: any;

  constructor(config: IDbConfig) {
    this.config = config;
  }

  public connect(): Promise<any> {
    this.connection = mysql2.createPool(this.config).promise();
    return this.connection;
  }

  public query(query: string, values: Array<string> = []): Promise<any> {
    return this.connection.query(query, values);
  }
}
