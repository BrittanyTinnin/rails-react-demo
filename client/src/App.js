import React, { Component } from 'react';
import { TodosForm, TodoList } from './components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <TodosForm />
        <TodoList />
      </div>
    );
  }
}



export default App;
