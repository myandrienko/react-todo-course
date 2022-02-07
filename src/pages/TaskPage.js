import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { useTodoItem } from "../hooks/useTodoItem";
import { FormRow } from "../components/FormRow";

export const TaskPage = () => {
  const { id } = useParams();
  const { task: initialTask, isLoading } = useTodoItem(id);
  const [task, setTask] = useState(null);

  if (!task && !isLoading) {
    setTask(initialTask);
  }

  function handleChange(event) {
    const { name, type } = event.target;
    const valueProp = type === 'checkbox' ? 'checked' : 'value';
    setTask({ ...task, [name]: event.target[valueProp] });
  }

  function getFieldProps(name, type) {
    return {
      name,
      [type === 'checkbox' ? 'checked' : 'value']: task[name],
      type,
      onChange: handleChange,
    }
  }

  return <>
    <h1>Task details</h1>
    <Link to='/list'>Back to list</Link>
    {task
      ? (
        <>
          <FormRow label='Task name'>
            <input {...getFieldProps('name')}/>
          </FormRow>
          <FormRow label='Done'>
            <input {...getFieldProps('done', 'checkbox')}/>
          </FormRow>
          <FormRow label='Urgent'>
            <input {...getFieldProps('urgent', 'checkbox')}/>
          </FormRow>
        </>
      )
      : <p>Loading task...</p>}
  </>
};
