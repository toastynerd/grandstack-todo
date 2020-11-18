import React from 'react';

function List({listData}) {
  return (
    <ul>
      {listData.map((data) => {
        return <li key={data._id}>{data.text}</li>
      })}
    </ul>
  )
}

export default List
