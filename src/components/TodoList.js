import React, { useCallback, useMemo } from 'react';
import { TodoItem } from "./TodoItem";

export function TodoList({ shouldShowOnlyUrgent, value, onTaskChange }) {
  console.log('TodoList rendered');

  const filteredList = useMemo(
    () => {
      console.log('Filtered list calculated');
      return shouldShowOnlyUrgent
        ? value.filter(item => item.urgent)
        : value
    },
    [shouldShowOnlyUrgent, value]
  );

  const handleChange = useCallback((newItem) => onTaskChange(newItem), [onTaskChange]);

  return filteredList.map((currentItem) => <TodoItem
    key={currentItem.id}
    value={currentItem}
    onChange={handleChange}
  />);
}