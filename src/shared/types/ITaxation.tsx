export interface ITaxation {
  id: number;
  percent: number;
  eventId: number;
  [index: string]: number;
}
