import { makeAutoObservable } from "mobx";
import { IData } from "../shared/types/IData";
import { IEvent } from "../shared/types/IEvent";

export default class EventStore {
  _currentEvent: IEvent | null = null;
  _events: IEvent[] = [];

  constructor() {
    this._currentEvent = null;
    this._events = [];

    makeAutoObservable(this);
  }

  setEvents(events: IData<IEvent>) {
    this._events = events.rows;
  }

  get events() {
    return this._events;
  }

  setCurrentEvent(event: IEvent | undefined) {
    this._currentEvent = event ? event : null;
  }

  get currentEvent() {
    return this._currentEvent;
  }

  getNameById(id: number) {
    const event = this._events.find((event) => event.id === id);

    return event ? event.name : "No name";
  }

  getBackgroundById(id: number) {
    const event = this._events.find((event) => event.id === id);

    return event ? event.background : "";
  }
}
