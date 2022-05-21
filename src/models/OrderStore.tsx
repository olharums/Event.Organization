import { makeAutoObservable } from "mobx";
import { IData } from "../shared/types/IData";
import { IOrder } from "../shared/types/IOrder";

export default class OrderStore {
  _currentOrder: IOrder | null = null;
  _orders: IOrder[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setOrders(orders: IData<IOrder>) {
    this._orders = orders.rows;
  }

  get orders() {
    return this._orders;
  }

  setCurrentOrder(order: IOrder | undefined) {
    this._currentOrder = order ? order : null;
  }

  get currentOrder() {
    return this._currentOrder;
  }
}
