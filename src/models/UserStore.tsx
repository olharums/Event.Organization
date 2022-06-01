import { makeAutoObservable } from "mobx";
import { IData } from "../shared/types/IData";
import { IUser } from "../shared/types/IUser";

export default class UserStore {
  _currentUser: IUser | null = null;

  _users: IUser[] = [];
  _isAuth: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }

  get isAuth() {
    return this._isAuth;
  }

  setUsers(users: IData<IUser>) {
    this._users = users.rows;
  }

  get users() {
    return this._users;
  }

  setCurrentUser(user: IUser | null) {
    this._currentUser = user;
  }

  get currentUser() {
    return this._currentUser;
  }
}
