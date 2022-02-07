import { useEffect, useState } from "react";
import * as api from "../api/api";

export function useTodoList() {
  const [list, setList] = useState(null);

  useEffect(() => {
    loadTasks().catch(() => {
      console.error('Failed to load tasks');
    });
  }, []);

  async function loadTasks() {
    const tasks = await api.getTasks();
    setList(tasks);
  }

  async function addTask(newTask) {
    setList([...list, newTask]);
    await api.addTask(newTask);
    await loadTasks();
  }

  async function updateTask(task) {
    setList(list.map(item => item.id === task.id ? task : item));
    await api.updateTask(task);
  }

  return { list, isLoading: list === null, addTask, updateTask };
}