import { IData } from "../types/IData";
import { IEvent } from "../types/IEvent";
import { $authHost, $host } from "./index";

export const fetchEvents = async (): Promise<IData<IEvent>> => {
  const { data } = await $host.get("api/events");

  return data;
};

export const createEvent = async (formData: IEvent) => {
  const { data } = await $authHost.post("api/events", formData);

  return data;
};

export const editEvent = async (formData: IEvent) => {
  const { id } = formData;

  const { data } = await $authHost.put(`api/events/${id}`, formData);

  return data;
};

export const deleteEvent = async (id: number) => {
  const { data } = await $authHost.delete(`api/events/${id}`);

  return data;
};

export const ReportEvent = async () => {
  await $authHost.get("api/events/report");
  return;
};
