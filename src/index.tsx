import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from  "react-redux"
import configureStore from "./redux/store"
import Routes from './routes';

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
