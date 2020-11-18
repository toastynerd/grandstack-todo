import React from 'react';

function List({ listData, removeTodo }) {
   return (
    <ul>
      {listData.map((data) => {
        return (
          <li key={data._id}>
            {data.text}
            <button onClick={ () => {
              console.log(`the data: ${data}`);
              removeTodo({variables: {task: data.text}});
            }}>Remove</button>
          </li>
        )
      })}
    </ul>
  )
}

export default List
