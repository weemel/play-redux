import React, { Component } from 'react';
import { connect } from 'react-redux';

const addTodo = todo => ({
  type: "ADD_TODO",
  payload: todo
});

const mapDispatchToProps = dispatch => {
  return {
    myLovelyAction: todo => dispatch(addTodo(todo))
  }
}

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      newTodo: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      newTodo: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = this.state.newTodo;
    if (newTodo === "")
      return;
    const uuid = `uid${Math.round(Math.random()*100000)}`
    this.props.myLovelyAction({ id: uuid, value: newTodo });
    this.setState({ newTodo: "" });
  }

  render() {
    return ( 
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.newTodo} onChange={this.handleChange} />
        <button type="submit">Add a todo</button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
