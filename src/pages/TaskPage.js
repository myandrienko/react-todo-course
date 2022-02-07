import React from 'react';
import { Link, useParams } from "react-router-dom";

export const TaskPage = () => {
  const { id } = useParams();

  return <>
    <h1>Under development</h1>
    <Link to='/list'>Back to list</Link>
  </>
};
