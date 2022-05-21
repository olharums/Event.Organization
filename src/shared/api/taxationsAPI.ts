import { IData } from "../types/IData";
import { ITaxation } from "../types/ITaxation";
import { $authHost, $host } from "./index";

export const fetchTaxations = async (): Promise<IData<ITaxation>> => {
  const { data } = await $host.get("api/taxations");

  return data;
};

export const createTaxation = async (formData: ITaxation) => {
  const { data } = await $authHost.post("api/taxations", formData);

  return data;
};

export const editTaxation = async (formData: ITaxation) => {
  const { id } = formData;

  const { data } = await $authHost.put(`api/taxations/${id}`, formData);

  return data;
};

export const deleteTaxation = async (id: number) => {
  const { data } = await $authHost.delete(`api/taxations/${id}`);

  return data;
};
