import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { useTodoItem } from "../hooks/useTodoItem";
import { TaskFields } from "../components/TaskFields";

export const TaskContext = React.createContext(null);

export const TaskPage = () => {
  const { id } = useParams();
  const { task: initialTask, isLoading } = useTodoItem(id);
  const [task, setTask] = useState(null);

  if (!task && !isLoading) {
    setTask(initialTask);
  }

  function handleChange({ name, value }) {
    setTask({ ...task, [name]: value });
  }

  return (
    <TaskContext.Provider value={{ task, handleChange }}>
      <h1>Task details</h1>
      <Link to='/list'>Back to list</Link>
      {task
        ? <TaskFields/>
        : <p>Loading task...</p>}
    </TaskContext.Provider>
  );
};
