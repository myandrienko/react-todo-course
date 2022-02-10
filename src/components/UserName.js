import React from 'react';
import { authStore } from "../stores/authStore";
import { useStore } from "../hooks/useStore";

const nameSelector = (state) => state.name;

export function UserName() {
  const name = useStore(authStore, nameSelector);

  if (!name) {
    return null;
  }

  return <em>Hello, {name}!</em>;
}
