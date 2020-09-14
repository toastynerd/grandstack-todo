import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import App from './components/app';

const client = new ApolloClient({
  uri: 'localhost:4000',
  cache: new InMemoryCache()
});


ReactDOM.render(<App client={client}/>, document.getElementById('root'));
