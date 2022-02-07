import React from 'react';
import { TodoItem } from "./TodoItem";

export function TodoList({ shouldShowOnlyUrgent, value, onTaskChange }) {
  const filteredList = shouldShowOnlyUrgent
    ? value.filter(item => item.urgent)
    : value;

  return filteredList.map((currentItem) => <TodoItem
    key={currentItem.id}
    value={currentItem}
    onChange={(newItem) => onTaskChange(newItem)}
  />);
}