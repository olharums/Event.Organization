import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";
import { IUser } from "../types/IUser";
import { IData } from "../types/IData";

export const registration = async (
  name: string,
  surname: string,
  phone: string,
  password: string
): Promise<IUser> => {
  const { data } = await $host.post("api/user/registration", {
    name,
    surname,
    password,
    phone,
    isAdmin: false,
  });

  localStorage.setItem("token", data.token);

  return jwt_decode(data.token);
};

export const login = async (
  phone: string,
  password: string
): Promise<IUser> => {
  const { data } = await $host.post("api/user/login", {
    phone,
    password,
  });

  localStorage.setItem("token", data.token);

  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const fetchAllUsers = async (): Promise<IData<IUser>> => {
  const { data } = await $host.get("api/user");

  return data;
};
