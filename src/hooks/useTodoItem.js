import { useEffect, useState } from "react";
import * as api from '../api/api';

export function useTodoItem(id) {
  const [task, setTask] = useState(null);

  useEffect(() => {
    loadTask(id).catch(() => {
      console.error(`Failed to load task with id ${id}`);
    })
  }, [id]);

  async function loadTask() {
    const task = await api.getTask(id);
    setTask(task);
  }

  return { task, isLoading: task === null };
}