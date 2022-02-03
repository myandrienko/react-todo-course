import React from 'react';
import { handleTaskAdd } from "./todos";

export function AddTodoItem() {
  console.log('Rendered AddTodoItem');
  const [taskName, setTaskName] = React.useState('New task');

  return <>
    <input value={taskName} onChange={(event) => {
      setTaskName(event.target.value);
    }}/>
    <button onClick={() => {
      handleTaskAdd(taskName);
      setTaskName('');
    }}>Add task
    </button>
  </>
}
