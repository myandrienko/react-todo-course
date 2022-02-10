import React from 'react';
import { authMobXStore } from "../stores/authMobXStore";
import { observer } from 'mobx-react-lite';

export const UserName = observer(function UserName() {
  console.log('UserName rendered');

  if (!authMobXStore.authorized) {
    return null;
  }

  return <em>Hello, {authMobXStore.name}!</em>;
});
