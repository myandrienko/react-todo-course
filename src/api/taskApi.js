import { hasTemporaryId } from "../models/todos";
import { BASE_URL } from "./config";

export async function getTasks() {
  const response = await fetch(`${BASE_URL}/tasks`);

  if (response.status !== 200) {
    throw new Error(`Fetching tasks failed, status ${response.status}`);
  }

  const tasks = await response.json();
  return tasks;
}

export async function getTask(id) {
  const response = await fetch(`${BASE_URL}/tasks/${id}`);
  return await response.json();
}

export async function addTask(task) {
  const { id, ...apiTask } = task;

  await fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    body: JSON.stringify(apiTask),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export async function updateTask(task) {
  if (hasTemporaryId(task)) {
    throw new Error('Cannot update task with client-generated id');
  }

  await fetch(`${BASE_URL}/tasks/${task.id}`, {
    method: 'PUT',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
