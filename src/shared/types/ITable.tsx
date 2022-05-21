export interface ITable {
  fetchData: any;
  createRecord: any;
  editRecord: any;
  deleteRecord: any;
  createReport?: any;
  columnNames: Array<string>;
  tableName: string;
}
