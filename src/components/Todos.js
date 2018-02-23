import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { todos: state.todos };
}

const ConnectedList = ({ todos }) => (
  <ul>
    { todos.map(todo => (
      <li key={todo.id}>{todo.value}</li>
    ))}
  </ul>
);

const Todos = connect(mapStateToProps)(ConnectedList);

export default Todos;