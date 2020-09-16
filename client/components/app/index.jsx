import React, { Component } from 'react';
import { ApolloProvider } from '@apollo/client';
import './app.css'

import TodoList from '../todo-list';

class App extends Component {
  render () {
    return ( 
      <ApolloProvider client={this.props.client}> 
        <div className="app">
        	<h1>The Amazing TODO list app!</h1>
          <TodoList> </TodoList>
        </div>
      </ApolloProvider>
    )
  }
}

export default App;
