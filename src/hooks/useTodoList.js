import { useEffect, useState } from "react";
import * as api from "../api/api";

export function useTodoList() {
  const [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      const tasks = await api.getTasks();
      setList(tasks);
    })();
  }, []);

  function updateList(newList) {
    setList(newList);
  }

  async function addTask(newTask) {
    setList([...list, newTask]);
    await api.addTask(newTask);
  }

  return { list, isLoading: list === null, addTask, updateList };
}