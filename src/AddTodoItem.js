import React from 'react';
import { createTask } from "./todos";

export function AddTodoItem({ onTaskAdd }) {
  console.log('Rendered AddTodoItem');
  const [taskName, setTaskName] = React.useState('New task');

  return <>
    <input value={taskName} onChange={(event) => {
      setTaskName(event.target.value);
    }}/>
    <button onClick={() => {
      onTaskAdd(createTask(taskName))
      setTaskName('');
    }}>Add task
    </button>
  </>
}
