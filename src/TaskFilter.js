import React from 'react';

export const TaskFilter = ({ shouldShowOnlyUrgent, onShowOnlyUrgentChange }) => {
  return (
    <label><input
      type="checkbox"
      checked={shouldShowOnlyUrgent}
      onChange={(event) => onShowOnlyUrgentChange(event.target.checked)}/>
      Show only urgent tasks
    </label>
  );
};