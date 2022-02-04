import { nanoid } from "nanoid";

export function createTask(name) {
  return {
    id: `$${nanoid()}`,
    name: name ?? `Added task ${new Date().toLocaleTimeString()}`,
    done: false,
    urgent: false
  };
}
