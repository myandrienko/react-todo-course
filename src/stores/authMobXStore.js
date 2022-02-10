import * as api from "../api/authApi";
import { action, computed, makeObservable, observable, runInAction, when } from "mobx";

class AuthStore {
  constructor(initialToken) {
    this.token = initialToken;

    makeObservable(this, {
      authorized: computed,
      token: observable,
      name: computed,
    });
  }

  get authorized() {
    return this.token !== null;
  }

  get claims() {
    if (!this.authorized) {
      return null;
    }

    const parts = this.token.split('.');

    if (parts.length !== 3) {
      throw new Error('Invalid JWT token');
    }

    return JSON.parse(atob(parts[1]));
  }

  get name() {
    return this.claims?.name ?? null;
  }

  async authenticate(login) {
    const jwt = await api.authenticate({ login });
    runInAction(() => {
      this.token = jwt;
    })
  }
}

export const authMobXStore = new AuthStore(null);

when(() => authMobXStore.authorized, () => {
  console.log(`You've been authorized as ${authMobXStore.name}`);
});

window.authMobXStore = authMobXStore;