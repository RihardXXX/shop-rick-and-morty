import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import ErrorBoundry from './components/error-boundry';
import { BrowserRouter as Router } from 'react-router-dom';

import { ShopContextProvider } from './components/shop-context';
import { getAllBooks, getBook } from './services';

import App from './components/app';
const services = { getAllBooks, getBook };

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ShopContextProvider value={services}>
        <Router>
          <App />
        </Router>
      </ShopContextProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
