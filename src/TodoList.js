import React from 'react';
import { TodoItem } from "./TodoItem";
import { handleDoneChange } from "./todos";

export function TodoList({ list }) {
  return list.map((item) => <TodoItem
    key={item.id}
    name={item.name}
    done={item.done}
    urgent={item.urgent}
    onDoneChange={(done) => handleDoneChange(item, done)}
  />);
}