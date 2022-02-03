import { TodoList } from "./TodoList";
import { todos as initialList } from "./todos";
import { AddTodoItem } from "./AddTodoItem";
import { TaskFilter } from "./TaskFilter";
import React from "react";

export function App() {
  const [list, setList] = React.useState(initialList);
  const [shouldShowOnlyUrgent, setShowOnlyUrgent] = React.useState(false);
  const filteredList = shouldShowOnlyUrgent ? list.filter(item => item.urgent) : list;

  return <>
    <TodoList value={filteredList} onChange={(list) => setList(list)}/>
    <AddTodoItem onTaskAdd={(newTask) => setList([newTask, ...list])}/>
    <TaskFilter
      shouldShowOnlyUrgent={shouldShowOnlyUrgent}
      onShowOnlyUrgentChange={(value) => setShowOnlyUrgent(value)}/>
  </>;
}