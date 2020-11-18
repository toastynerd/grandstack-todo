import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
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

const REMOVE_TODO = gql`
  mutation DeleteTodo($task: String!) {
    DeleteTodo(task: $task) {
      _id
      task
    }
  }
`;


const TodoList = () => {
  const { loading, error, data } = useQuery(todoQuery, {
    pollInterval: 500
  });
  const [deleteTodo] = useMutation(REMOVE_TODO);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error: {error}</p>;

  return (
    <div className="todo-list">
      <h2>Still left to accomplish:</h2>
      <TodoFormWrapper/>
      <List 
        listData={data.Todo.map((item) => {
          return {'_id': item._id, 'text': item.task}
        })} 
        removeTodo={deleteTodo}
      />
    </div>
  );
}

export default TodoList
