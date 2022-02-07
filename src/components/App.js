import { TodoList } from "./TodoList";
import { AddTodoItem } from "./AddTodoItem";
import { TaskFilter } from "./TaskFilter";
import React, { useState } from "react";
import { Timer } from "./Timer";
import { useTodoList } from "../hooks/useTodoList";

export function App() {
  const { list, isLoading, addTask, updateTask } = useTodoList();
  const [shouldShowOnlyUrgent, setShowOnlyUrgent] = useState(false);

  return <>
    <Timer/>
    {!isLoading
      ? <>
        <TodoList
          value={list}
          shouldShowOnlyUrgent={shouldShowOnlyUrgent}
          onTaskChange={(task) => updateTask(task)}/>
        <AddTodoItem onTaskAdd={(newTask) => addTask(newTask)}/>
        <TaskFilter
          shouldShowOnlyUrgent={shouldShowOnlyUrgent}
          onShowOnlyUrgentChange={(value) => setShowOnlyUrgent(value)}/>
      </>
      : <h1>Loading tasks...</h1>}
  </>;
}