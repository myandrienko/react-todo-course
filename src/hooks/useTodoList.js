import { useCallback, useEffect, useState } from "react";
import * as api from "../api/taskApi";

export function useTodoList() {
  const [list, setList] = useState(null);

  const loadTasks = useCallback(async () => {
    const tasks = await api.getTasks();
    setList(tasks);
  }, []);

  useEffect(() => {
    loadTasks().catch(() => {
      console.error('Failed to load tasks');
    });
  }, [loadTasks]);

  async function addTask(newTask) {
    setList([...list, newTask]);
    await api.addTask(newTask);
    await loadTasks();
  }

  const updateTask = useCallback(async (task) => {
    setList(list => list.map(item => item.id === task.id ? task : item));
    await api.updateTask(task);
  }, []);

  return { list, isLoading: list === null, addTask, updateTask };
}