export interface IOrder {
  id: number;
  date: string;
  eventId: number;
  employeeId: string;
  price: number;
  taxationId: number;
  publicAccess: boolean;
  address: string;
  userId: number;
  [index: string]: string | number | Array<number> | boolean;
}
