export interface IUser {
  id: number;
  surname: string;
  name: string;
  phone: number;
  password: string;
  isAdmin: boolean;
  [index: string]: string | number | boolean;
}
