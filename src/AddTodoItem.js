import React from 'react';
import { createTask } from "./todos";

export function AddTodoItem({ onTaskAdd }) {
  console.log('Rendered AddTodoItem');
  const [taskName, setTaskName] = React.useState('New task');
  const ref = React.useRef(null);

  return <>
    <input ref={ref} value={taskName} onChange={(event) => {
      setTaskName(event.target.value);
    }}/>
    <button onClick={() => {
      onTaskAdd(createTask(taskName))
      ref.current.select();
    }}>Add task
    </button>
  </>
}
