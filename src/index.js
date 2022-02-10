import React from 'react';
import ReactDOM from 'react-dom';
import { ListPage } from "./pages/ListPage";
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { TaskPage } from "./pages/TaskPage";
import { LoginPage } from "./pages/LoginPage";

ReactDOM.render((
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path='/' element={<ListPage/>}/>
          <Route path='/task/:id' element={<TaskPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </HashRouter>
    </React.StrictMode>
  ),
  document.getElementById('root')
);
