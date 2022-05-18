import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import configureStore from './redux/store';
import Routes from './routes';

const store = configureStore();

const container: any = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Routes />
  </Provider>
);
