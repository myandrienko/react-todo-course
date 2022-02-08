import { TodoList } from "../components/TodoList";
import { AddTodoItem } from "../components/AddTodoItem";
import { TaskFilter } from "../components/TaskFilter";
import React, { useCallback, useMemo, useState } from "react";
import { Timer } from "../components/Timer";
import { useTodoList } from "../hooks/useTodoList";

export function ListPage() {
  const { list, isLoading, addTask, updateTask } = useTodoList();
  const [shouldShowOnlyUrgent, setShowOnlyUrgent] = useState(false);
  const handleTaskChange = useCallback((task) => updateTask(task), [updateTask]);
  const [fake, setFake] = useState({});

  return <>
    <Timer/>
    <button onClick={() => setFake({})}>Re-render!</button>
    {!isLoading
      ? <>
        <TodoList
          value={list}
          shouldShowOnlyUrgent={shouldShowOnlyUrgent}
          onTaskChange={handleTaskChange}/>
        <AddTodoItem onTaskAdd={(newTask) => addTask(newTask)}/>
        <TaskFilter
          shouldShowOnlyUrgent={shouldShowOnlyUrgent}
          onShowOnlyUrgentChange={(value) => setShowOnlyUrgent(value)}/>
      </>
      : <h1>Loading tasks...</h1>}
  </>;
}