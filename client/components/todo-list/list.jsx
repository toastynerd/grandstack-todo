import React, { Component } from 'react';

class List extends Component {
  render() {
    console.log(this.props);
    return(
      <ul>
        {
          this.props.listData.map((item) => <li key={item._id}>{item.text}</li>)
        }
      </ul>
    )
  }
} 

export default List
