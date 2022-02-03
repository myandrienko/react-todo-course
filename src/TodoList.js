import React from 'react';
import { TodoItem } from "./TodoItem";

export function TodoList({ shouldShowOnlyUrgent, value, onChange }) {
  const filteredList = shouldShowOnlyUrgent
    ? value.filter(item => item.urgent)
    : value;

  return filteredList.map((currentItem) => <TodoItem
    key={currentItem.id}
    value={currentItem}
    onChange={(newItem) => {
      const newList = value.map((item) => item.id === currentItem.id ? newItem : item);
      onChange(newList);
    }}
  />);
}