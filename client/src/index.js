import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';



const client = new ApolloClient({
  uri: 'mongodb://127.0.0.1:27017/googlebooks',
  cache: new InMemoryCache(),
});
ReactDOM.render(
<ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
