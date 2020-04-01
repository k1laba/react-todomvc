import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
import TodoHeader from './components/todo-header';
import TodoList from './components/todo-list';
import TodoFooter from './components/todo-footer';
import { useDispatch } from 'react-redux';
import { toggleAllAction } from './store/actions';


const App = () => {

  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const toggleAll = () => {
    dispatch(toggleAllAction(!toggle));
    setToggle(current => !current);
  }

  return (
    <Router>
      <Switch>
        <Route path="/:filter?">
          <section className="todoapp">
            <TodoHeader></TodoHeader>
            <section className="main">
              <input id="toggle-all" className="toggle-all" onChange={() => toggleAll()} type="checkbox" />
              <label htmlFor="toggle-all">Mark all as complete</label>
              <TodoList></TodoList>
            </section>
            <TodoFooter></TodoFooter>
          </section>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
