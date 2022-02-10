import { useCallback, useEffect, useState } from "react";
import * as api from '../api/taskApi';

export function useTodoItem(id) {
  const [task, setTask] = useState(null);

  const loadTask = useCallback(async () => {
    const task = await api.getTask(id);
    setTask(task);
  }, [id]);

  useEffect(() => {
    loadTask().catch(() => {
      console.error(`Failed to load task with id ${id}`);
    })
  }, [loadTask, id]);

  return { task, isLoading: task === null };
}