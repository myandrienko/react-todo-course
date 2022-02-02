import React from 'react';
import ReactDOM from 'react-dom';

const todos = [
  { name: 'First task', done: true, urgent: false },
  { name: 'Second task', done: false, urgent: true }
];

function TodoItem({ name, done, urgent }) {
  return <label><input type="checkbox" checked={done}/>{name}</label>
}

function TodoList({ list }) {
  const elements = list.map(item => <TodoItem {...item} />);
  return <TodoItem name={list[0].name} done={list[0].done}/>
}

const element = <TodoList list={todos}/>;
console.log(element);

ReactDOM.render(element,
  document.getElementById('root')
);
