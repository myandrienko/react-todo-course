import React, { useContext } from 'react';
import { TaskContext } from "../pages/TaskPage";

export function Checkbox({ name, ...props }) {
  const context = useContext(TaskContext);

  function handleChange(event) {
    context.handleChange({
      name: event.target.name,
      value: event.target.checked,
    });
  }

  return <input
    {...props}
    name={name}
    type='checkbox'
    checked={context.task[name]}
    onChange={handleChange}
  />;
}

export function Textbox({ name, ...props }) {
  const context = useContext(TaskContext);

  function handleChange(event) {
    context.handleChange({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return <input
    {...props}
    name={name}
    value={context.task[name]}
    onChange={handleChange}
  />;
}
