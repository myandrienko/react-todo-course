import React from 'react';

export function FormRow({ children, label }) {
  return <p>
    <label>{label}:</label>
    {children}
  </p>;
}