import React, { useContext } from 'react';
import { TaskContext } from "../pages/TaskPage";

export function Checkbox({ value, onChange, ...props }) {
  function handleChange(event) {
    onChange({
      name: event.target.name,
      value: event.target.checked,
    });
  }

  return <input {...props} type='checkbox' checked={value} onChange={handleChange}/>;
}

export function Textbox({ onChange, ...props }) {
  function handleChange(event) {
    onChange({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return <input {...props} onChange={handleChange}/>;
}

function connect(Component) {
  return function ConnectedComponent({ name, ...props }) {
    const context = useContext(TaskContext);
    const value = context.task[name];
    return <Component {...props} name={name} value={value} onChange={context.handleChange}/>;
  }
}

export const ConnectedCheckbox = connect(Checkbox);
export const ConnectedTextbox = connect(Textbox);

export function Field({ name, component: Component, children: render, ...props }) {
  const context = useContext(TaskContext);
  const value = context.task[name];

  if (typeof render === 'function') {
    return render({ value, onChange: context.handleChange, name });
  }

  if (Component) {
    return <Component {...props} name={name} value={value} onChange={context.handleChange}/>;
  }

  throw new Error('Neither component nor render function provided');
}
