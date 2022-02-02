import React from 'react';

export function TodoItem({ name, done, urgent, onDoneChange }) {
  return <p><label><input
    type="checkbox"
    checked={done}
    onChange={(event) => {
      onDoneChange(event.target.checked);
    }}
  />{name}</label></p>
}