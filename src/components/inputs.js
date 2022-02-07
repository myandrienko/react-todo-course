import React from 'react';

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
