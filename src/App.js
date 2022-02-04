import { TodoList } from "./TodoList";
import { AddTodoItem } from "./AddTodoItem";
import { TaskFilter } from "./TaskFilter";
import React, { useEffect } from "react";
import { Timer } from "./Timer";
import { addTask, getTasks } from "./api";

export function App() {
  const [list, setList] = React.useState(null);
  const [shouldShowOnlyUrgent, setShowOnlyUrgent] = React.useState(false);

  useEffect(() => {
    (async () => {
      const tasks = await getTasks();
      setList(tasks);
    })();
  }, []);

  async function handleTaskAdd(newTask) {
    setList([...list, newTask]);
    await addTask(newTask);
  }

  return <>
    <Timer/>
    {list
      ? <>
        <TodoList
          value={list}
          shouldShowOnlyUrgent={shouldShowOnlyUrgent}
          onChange={(list) => setList(list)}/>
        <AddTodoItem onTaskAdd={handleTaskAdd}/>
        <TaskFilter
          shouldShowOnlyUrgent={shouldShowOnlyUrgent}
          onShowOnlyUrgentChange={(value) => setShowOnlyUrgent(value)}/>
      </>
      : <h1>Loading tasks...</h1>}
  </>;
}