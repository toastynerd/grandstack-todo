import React, { Component } from 'react';
import { useQuery, gql } from '@apollo/client';

const todoQuery = gql`
    query {
      Todo {
        _id
        task
      }
    }
  `;


const TodoList = () => {
  const { loading, error, data } = useQuery(todoQuery);
  if (loading) return <p>loading...</p>;
  if (error) return <p>error: {error}</p>;

  console.log(data);
  return (
    <div>
      <h2>Still left to accomplish:</h2>
      <ul className="todos">
        {
          data.Todo.map((todo) => {
            return <li key={todo._id}>{todo.task}</li>
          })
        }
      </ul>
    </div>
  );
}

export default TodoList
