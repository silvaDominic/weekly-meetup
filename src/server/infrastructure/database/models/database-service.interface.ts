export interface IDatabaseServiceInterface {
  connect(): Promise<any>,
  query(query: string, values?: Array<string>): Promise<any> | Promise<Array<any>>,
}
