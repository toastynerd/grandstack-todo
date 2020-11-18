import React from 'react';
import { useQuery, gql } from '@apollo/client';
import List from './list.jsx';
import TodoFormWrapper from './todo-form-wrapper'
import './todo-list.css';

const todoQuery = gql`
    query {
      Todo {
        _id
        task
      }
    }
  `;


const TodoList = () => {
  const { loading, error, data } = useQuery(todoQuery, {
    pollInterval: 500
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>error: {error}</p>;

  return (
    <div className="todo-list">
      <h2>Still left to accomplish:</h2>
      <TodoFormWrapper/>
      <List listData={data.Todo.map((item) => {
        return {'_id': item._id, 'text': item.task}
      })}/>
    </div>
  );
}

export default TodoList
