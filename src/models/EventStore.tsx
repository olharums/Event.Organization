import { makeAutoObservable } from "mobx";
import { IEvent } from "../shared/types/IEvent";

// import { IPost } from "shared/types/user-profile";
// import { IUserInfo } from "shared/types/api-data";

export default class EventStore {
  _currentEvent: IEvent | null = null;
  _events: IEvent[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setEvents(events: IEvent[]) {
    this._events = events;
  }

  get events() {
    return this._events;
  }

  setCurrentEvent(event: IEvent) {
    this._currentEvent = event;
  }

  get currentEvent() {
    return this._currentEvent;
  }
}
