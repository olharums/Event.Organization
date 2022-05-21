import { IData } from "../types/IData";
import { IOrder } from "../types/IOrder";
import { $authHost, $host } from "./index";

export const fetchOrders = async (): Promise<IData<IOrder>> => {
  const { data } = await $host.get("api/orders");

  return data;
};

export const createOrder = async (formData: any) => {
  const { data } = await $authHost.post("api/orders", formData);

  return data;
};

export const editOrder = async (formData: IOrder) => {
  const { id } = formData;

  const { data } = await $authHost.put(`api/orders/${id}`, formData);

  return data;
};

export const deleteOrder = async (id: number) => {
  const { data } = await $authHost.delete(`api/orders/${id}`);

  return data;
};

export const createReport = async () => {
  await $authHost.get("api/orders/report");

  return;
};
