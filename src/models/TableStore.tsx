import { makeAutoObservable } from "mobx";
import { IData } from "../shared/types/IData";

export default class TableStore<T> {
  _data: T[] | null = null;
  _columnNames: Array<string> = [];

  _fetchData: (() => Promise<IData<T>>) | null = null;

  _createRecord: null | ((formData: any) => Promise<any>) = null;

  _editRecord: ((formData: any) => Promise<any>) | null = null;

  _deleteRecord: ((id: number) => Promise<any>) | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setData(data: IData<T>) {
    this._data = data.rows;

    if (data.rows.length) {
      this._columnNames = Object.keys(this._data[0]).filter(
        (colName) =>
          colName !== "createdAt" && colName !== "updatedAt" && colName !== "id"
      );
    } else {
      this._columnNames = [];
    }
  }

  get data() {
    return this._data;
  }

  setFetchData(func: () => Promise<IData<T>>) {
    this._fetchData = func;
  }

  get fetchData() {
    return this._fetchData;
  }

  setCreateRecord(func: ((formData: T) => Promise<any>) | null) {
    this._createRecord = func;
  }

  get createRecord() {
    return this._createRecord;
  }

  setEditRecord(func: ((formData: T) => Promise<any>) | null) {
    this._editRecord = func;
  }

  get editRecord() {
    return this._editRecord;
  }

  setDeleteRecord(func: ((id: number) => Promise<any>) | null) {
    this._deleteRecord = func;
  }

  get deleteRecord() {
    return this._deleteRecord;
  }

  get columnNames(): Array<string> {
    return this._columnNames;
  }
}
