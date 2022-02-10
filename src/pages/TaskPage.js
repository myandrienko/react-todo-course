import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useTodoItem } from "../hooks/useTodoItem";
import { TaskFields } from "../components/TaskFields";
import { Formik } from 'formik';
import { boolean, object, string } from "yup";

const taskSchema = object({
  name: string().required(),
  done: boolean().required(),
  urgent: boolean().required()
});

export const TaskPage = () => {
  const { id } = useParams();
  const { task: initialTask, isLoading } = useTodoItem(id);

  function handleSubmit(event) {
    console.log('Submit', event);
  }

  return (
    <>
      <h1>Task details</h1>
      <Link to='/list'>Back to list</Link>
      {!isLoading
        ? (
          <Formik
            initialValues={initialTask}
            validationSchema={taskSchema}
            validateOnChange={false}
            onSubmit={handleSubmit}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <TaskFields/>
                <button type='submit'>Submit</button>
              </form>
            )}
          </Formik>
        )
        : <p>Loading task...</p>}
    </>
  );
};
