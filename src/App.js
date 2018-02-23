import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from "./store/index"
import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">All my todos</h1>
          </header>
          <Todos />
          <AddTodo />          
        </div>
      </Provider>
    );
  }
}

export default App;
