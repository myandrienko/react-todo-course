import React, { useReducer } from 'react';
import { Link, useParams } from "react-router-dom";
import { useTodoItem } from "../hooks/useTodoItem";
import { TaskFields } from "../components/TaskFields";
import { produce } from 'immer';

export const TaskContext = React.createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case 'RESET':
      return action.payload;

    case 'CHANGE':
      return produce(state, (draft) => {
        draft[action.payload.name] = action.payload.value;
      });

    default:
      return state;
  }
}

export const TaskPage = () => {
  const { id } = useParams();
  const { task: initialTask, isLoading } = useTodoItem(id);
  const [task, dispatch] = useReducer(reducer, null);

  if (!task && !isLoading) {
    dispatch({ type: 'RESET', payload: initialTask });
  }

  return (
    <TaskContext.Provider value={{ task, dispatch }}>
      <h1>Task details</h1>
      <Link to='/list'>Back to list</Link>
      {task
        ? <TaskFields/>
        : <p>Loading task...</p>}
    </TaskContext.Provider>
  );
};
