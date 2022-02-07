import { hasTemporaryId } from "../models/todos";

const userId = process.env.REACT_APP_USER_ID;
const BASE_URL = `https://61fbda4e3f1e34001792c65e.mockapi.io/api/u/${userId}`;

export async function getTasks() {
  const response = await fetch(`${BASE_URL}/tasks`);

  if (response.status !== 200) {
    throw new Error(`Fetching tasks failed, status ${response.status}`);
  }

  const tasks = await response.json();
  return tasks;
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
