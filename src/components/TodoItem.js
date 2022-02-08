import React from 'react';
import { hasTemporaryId } from "../models/todos";

export const TodoItem = React.memo(function TodoItem({ value, onChange }) {
  console.log('Rendered TodoItem');
  return <p><label><input
    type="checkbox"
    checked={value.done}
    disabled={hasTemporaryId(value)}
    onChange={(event) => {
      onChange({ ...value, done: event.target.checked });
    }}
  />{value.name}</label></p>
});