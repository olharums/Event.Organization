export interface IEmployee {
  id?: number;
  name: string;
  surname: string;
  category: string;
  eventId: number;
  salary: number;
  img: string;
  bio: string;
  [index: string]: string | number | undefined;
}
