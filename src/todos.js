import { nanoid } from "nanoid";

export const todos = [
  { id: nanoid(), name: 'First task', done: true, urgent: false },
  { id: nanoid(), name: 'Second task', done: false, urgent: true }
];

export function createTask(name) {
  return {
    id: nanoid(),
    name: name ?? `Added task ${new Date().toLocaleTimeString()}`,
    done: false,
    urgent: false
  };
}
