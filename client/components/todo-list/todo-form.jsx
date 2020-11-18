import React, { Component } from 'react';
import {gql, useMutation} from '@apollo/client';
import './todo-form.css';

function TodoForm({addTodo}) {
  let input;
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({variables: {task: input.value}});
    input.value = '';
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" ref={node => {
          input = node;
        }}
      />
      <button type="submit">Create</button>
    </form>
  )
};

export default TodoForm
