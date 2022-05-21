import { makeAutoObservable } from "mobx";
import { IData } from "../shared/types/IData";
import { IEmployee } from "../shared/types/IEmployee";

export default class EmployeeStore {
  _currentEmployee: IEmployee | null = null;
  _employees: IEmployee[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setEmployees(employees: IData<IEmployee>) {
    this._employees = employees.rows;
  }

  get employees() {
    return this._employees;
  }

  setCurrentEmployee(employee: IEmployee | undefined) {
    this._currentEmployee = employee ? employee : null;
  }

  get currentEmployee() {
    return this._currentEmployee;
  }

  getEmployeesByEventId(id: number) {
    return this._employees.filter((emp) => emp.eventId === id);
  }
}
