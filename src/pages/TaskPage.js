import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { useTodoItem } from "../hooks/useTodoItem";
import { Checkbox, Textbox } from "../components/inputs";
import { FormRow } from "../components/FormRow";

const fields = [
  { label: 'Task name', key: 'name', Component: Textbox },
  { label: 'Done', key: 'done', Component: Checkbox },
  { label: 'Urgent', key: 'urgent', Component: Checkbox },
];

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

  function getFieldProps(name) {
    return {
      name,
      value: task[name],
      onChange: handleChange,
    }
  }

  return <>
    <h1>Task details</h1>
    <Link to='/list'>Back to list</Link>
    {task
      ? fields.map(({ label, key, Component }) => (
        <FormRow key={key} label={label}>
          <Component {...getFieldProps(key)} />
        </FormRow>
      ))
      : <p>Loading task...</p>}
  </>
};
