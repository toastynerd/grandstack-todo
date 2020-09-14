import React, { Component } from 'react';

import { ApolloProvider } from '@apollo/client';

class App extends Component {
  render () {
    return ( 
      <ApolloProvider client={this.props.client}> 
        <div>
        	<h1>Hello from Apollo</h1>
        </div>
      </ApolloProvider>
    )
  }
}

export default App;
