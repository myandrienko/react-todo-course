import { TodoList } from "./TodoList";
import { todos } from "./todos";
import { AddTodoItem } from "./AddTodoItem";
import { TaskFilter } from "./TaskFilter";
import React from "react";

export function App() {
  const [shouldShowOnlyUrgent, setShowOnlyUrgent] = React.useState(false);
  const filteredList = shouldShowOnlyUrgent ? todos.filter(item => item.urgent) : todos;

  return <>
    <TodoList list={filteredList}/>
    <AddTodoItem/>
    <TaskFilter
      shouldShowOnlyUrgent={shouldShowOnlyUrgent}
      onShowOnlyUrgentChange={(value) => setShowOnlyUrgent(value)}/>
  </>;
}