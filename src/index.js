import React from 'react';
import ReactDOM from 'react-dom';
import { ListPage } from "./pages/ListPage";
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { TaskPage } from "./pages/TaskPage";

ReactDOM.render((
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path='/' element={<ListPage/>}/>
          <Route path='/task/:id' element={<TaskPage/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </HashRouter>
    </React.StrictMode>
  ),
  document.getElementById('root')
);
