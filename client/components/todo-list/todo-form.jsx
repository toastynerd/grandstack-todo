import React, { Component } from 'react';
import {gql, useMutation} from '@apollo/client';
import './todo-form.css';



class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {newTask: ''};
  }

  handleChange(event) {
    this.setState({newTask: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.newTask);
    let newData = this.state.newTask;
    this.props.addTodo({variables: {task: newData}});
    this.setState({newTask: ''});
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" onChange={this.handleChange.bind(this)} value={this.state.newTask} placeholder="new task"/>
        <button type="submit">Create</button>
      </form>
    )
  }
}

export default TodoForm
