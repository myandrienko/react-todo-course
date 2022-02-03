import React from 'react';
import { TodoItem } from "./TodoItem";

export function TodoList({ value, onChange }) {
  return value.map((item, currentItemIndex) => <TodoItem
    key={item.id}
    value={item}
    onChange={(newItem) => {
      const newList = value.map((item, index) => index === currentItemIndex ? newItem : item);
      onChange(newList);
    }}
  />);
}