import { TodoList } from "./TodoList";
import { todos as initialList } from "./todos";
import { AddTodoItem } from "./AddTodoItem";
import { TaskFilter } from "./TaskFilter";
import React from "react";
import { Timer } from "./Timer";

export function App() {
  const [list, setList] = React.useState(initialList);
  const [shouldShowOnlyUrgent, setShowOnlyUrgent] = React.useState(false);
  const [showTimer, setShowTimer] = React.useState(true);

  return <>
    {showTimer && <Timer/>}
    <button onClick={() => setShowTimer(false)}>Hide timer</button>
    <TodoList
      value={list}
      shouldShowOnlyUrgent={shouldShowOnlyUrgent}
      onChange={(list) => setList(list)}/>
    <AddTodoItem onTaskAdd={(newTask) => setList([newTask, ...list])}/>
    <TaskFilter
      shouldShowOnlyUrgent={shouldShowOnlyUrgent}
      onShowOnlyUrgentChange={(value) => setShowOnlyUrgent(value)}/>
  </>;
}