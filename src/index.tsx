import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from  "react-redux"
import configureStore from "./redux/store"
import Routes from './routes';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache({
    addTypename: false
  })
});

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
