import React from 'react';
import ReactDOM from 'react-dom';
import { TodoList } from "./TodoList";
import { handleTaskAdd, todos } from "./todos";

export function render() {
  ReactDOM.render(<>
      <TodoList list={todos}/>
      <button onClick={() => handleTaskAdd()}>Add task</button>
    </>,
    document.getElementById('root')
  );
}

render();
