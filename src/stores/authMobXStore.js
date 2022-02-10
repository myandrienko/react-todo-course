import * as api from "../api/authApi";
import { action, makeObservable, observable } from "mobx";

class AuthStore {
  constructor(initialData) {
    this.reset(initialData);

    makeObservable(this, {
      authorized: observable,
      token: observable,
      name: observable,
      reset: action
    });
  }

  async authenticate(login) {
    const jwt = await api.authenticate({ login });
    const parts = jwt.split('.');

    if (parts.length !== 3) {
      throw new Error('Invalid JWT token');
    }

    const claims = JSON.parse(atob(parts[1]));
    this.reset({ authorized: true, name: claims.name, token: jwt });
  }

  reset(data) {
    Object.assign(this, data);
  }
}

export const authMobXStore = new AuthStore({
  authorized: false,
  name: null,
  token: null
});

window.authMobXStore = authMobXStore;