export interface IEvent {
  id?: number;
  name: string;
  price: number;
  background: string;
  description: string;
  img: string;
  imgExample1: string;
  imgExample2: string;
  imgExample3: string;
  size: number;
  [index: string]: string | number | undefined;
}
