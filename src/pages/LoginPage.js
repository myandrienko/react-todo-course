import React from 'react';
import * as api from '../api/authApi';
import { authStore } from "../stores/authStore";
import { useNavigate } from 'react-router-dom';

async function authenticate() {
  const jwt = await api.authenticate({ login: 'Matvey Andrienko' });
  const parts = jwt.split('.');

  if (parts.length !== 3) {
    throw new Error('Invalid JWT token');
  }

  const claims = JSON.parse(atob(parts[1]));
  authStore.update((state) => {
    state.authorized = true;
    state.token = jwt;
    state.name = claims.name;
  });
}

export function LoginPage() {
  const navigate = useNavigate();

  async function handleLogInClick() {
    await authenticate();
    navigate('/');
  }

  return <>
    <h1>You're not logged in</h1>
    <button onClick={handleLogInClick}>Log in</button>
  </>;
}