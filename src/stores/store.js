import { produce } from "immer";

export class Store {
  constructor(initialData) {
    this._data = initialData;
    this._listeners = new Set();
  }

  subscribe(callback) {
    this._listeners.add(callback);
    return () => {
      this._listeners.delete(callback);
    };
  }

  update(updater) {
    const newData = produce(this._data, (draft) => updater(draft));

    if (newData !== this._data) {
      this._data = newData;
      this._listeners.forEach(listener => listener(newData));
    }
  }

  getState() {
    return Object.freeze(this._data);
  }
}

