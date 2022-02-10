import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authMobXStore } from "../stores/authMobXStore";

export function LoginPage() {
  const navigate = useNavigate();

  async function handleLogInClick() {
    await authMobXStore.authenticate('Matvey Andrienko');
    navigate('/');
  }

  return <>
    <h1>You're not logged in</h1>
    <button onClick={handleLogInClick}>Log in</button>
  </>;
}