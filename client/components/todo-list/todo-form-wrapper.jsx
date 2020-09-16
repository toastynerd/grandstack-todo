import React from 'react';
import { useMutation, gql } from '@apollo/client';
import TodoForm from './todo-form';

const ADD_TODO = gql`
  mutation CreateTodo($task: String!) {
    CreateTodo(task: $task) {
      _id
      task
    }
  }
`


const TodoFormWrapper = () => {
  const [addTodo, { data }] = useMutation(ADD_TODO);
  console.log(data);

  return (
    <TodoForm addTodo={addTodo.bind(this)}/>
  )
}

export default TodoFormWrapper;
