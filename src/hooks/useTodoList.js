import { useCallback, useEffect, useState } from "react";
import * as api from "../api/taskApi";
import { useNavigate } from "react-router-dom";

export function useTodoList() {
  const [list, setList] = useState(null);
  const navigate = useNavigate();

  const loadTasks = useCallback(async () => {
    const tasks = await api.getTasks();
    setList(tasks);
  }, []);

  useEffect(() => {
    loadTasks().catch((e) => {
      if (e.message === 'Unauthorized') {
        navigate('/login');
      }

      console.error('Failed to load tasks');
    });
  }, [loadTasks, navigate]);

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