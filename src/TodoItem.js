import React from 'react';

export function TodoItem({ value, onChange }) {
  console.log('Rendered TodoItem');
  return <p><label><input
    type="checkbox"
    checked={value.done}
    onChange={(event) => {
      onChange({ ...value, done: event.target.checked });
    }}
  />{value.name}</label></p>
}