import { nanoid } from "nanoid";

export function createTask(name) {
  return {
    id: `$${nanoid()}`,
    isPhantom: true,
    name: name ?? `Added task ${new Date().toLocaleTimeString()}`,
    done: false,
    urgent: false
  };
}

export function hasTemporaryId(task) {
  return task.id.startsWith('$');
}
