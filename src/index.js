import React from 'react';
import ReactDOM from 'react-dom';

const todos = [
  { name: 'First task', done: true, urgent: false },
  { name: 'Second task', done: false, urgent: true }
];

function TodoItem({ name, done, urgent, onDoneChange }) {
  try {
    console.log('TodoItem called');
    return <label><input
      type="checkbox"
      checked={done}
      onChange={(event) => {
        onDoneChange(event.target.checked);
      }}
    />{name}</label>
  } finally {
    console.log('TodoItem returned');
  }
}

function TodoList({ list }) {
  return list.map((item) => <TodoItem
    {...item}
    onDoneChange={(done) => handleDoneChange(item, done)}
  />);
}

function handleDoneChange(item, done) {
  item.done = done;
  render();
}

function render() {
  console.log('Render called');
  console.log(<TodoList list={todos}/>);
  ReactDOM.render(<TodoList list={todos}/>,
    document.getElementById('root')
  );
  console.log('Render finished');
}

render();

