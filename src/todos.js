import { render } from "./index";
import { nanoid } from "nanoid";

export const todos = [
  { id: nanoid(), name: 'First task', done: true, urgent: false },
  { id: nanoid(), name: 'Second task', done: false, urgent: true }
];

export function handleDoneChange(item, done) {
  item.done = done;
  render();
}

export function handleTaskAdd(name) {
  todos.unshift({
    id: nanoid(),
    name: name ?? `Added task ${new Date().toLocaleTimeString()}`,
    done: false,
    urgent: false
  });
  render();
}
