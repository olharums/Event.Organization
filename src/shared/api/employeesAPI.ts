import { IData } from "../types/IData";
import { IEmployee } from "../types/IEmployee";
import { $authHost, $host } from "./index";

export const fetchEmployees = async (): Promise<IData<IEmployee>> => {
  const { data } = await $host.get("api/employees");

  return data;
};

export const createEmployee = async (formData: IEmployee) => {
  const { data } = await $authHost.post("api/employees", formData);

  return data;
};

export const editEmployee = async (formData: IEmployee) => {
  const { id } = formData;

  const { data } = await $authHost.put(`api/employees/${id}`, formData);

  return data;
};

export const deleteEmployee = async (id: number) => {
  const { data } = await $authHost.delete(`api/employees/${id}`);

  return data;
};
