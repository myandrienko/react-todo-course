import { Store } from "./store";

export const authStore = new Store({
  authorized: false,
  token: null,
  name: null
});

window.authStore = authStore;