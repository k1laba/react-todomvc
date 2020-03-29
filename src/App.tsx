import React from 'react';
import './App.scss';
import TodoHeader from './components/todo-header';
import TodoList from './components/todo-list';
import TodoFooter from './components/todo-footer';

const App = () => {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" />
      </header>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label>Mark all as complete</label>
        <ul className="todo-list"></ul>
      </section>
      <footer className="footer">
        <span className="todo-count"></span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </section>
  );
}
export default App;
