import React from 'react';
import './App.css';
import CreateTodo from './create/CreateTodo.js'
import Home from './home/Home.js'
import ListTodo from './list/ListTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="App-header">
        Welcome to todo App!

        <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/createtodo">
            <CreateTodo />
          </Route>
          <Route path="/todolist">
            <ListTodo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      </div>
    </div>
  );
}

export default App;
