import React, { Component } from 'react';
import {gql, useMutation} from '@apollo/client';
import './todo-form.css';

const ADD_TODO = gql`
  mutation CreateTodo($task: String!) {
    CreateTodo(task: $task) {
      _id
      task
    }
  }
`

const [addTodo, { data }] = useMutation(ADD_TODO);

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
    addTodo({variables: {type: newData}});
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
