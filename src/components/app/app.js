import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';

import { HomePage, CartPage } from '../pages';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <h2>Welcome to shop goods Rick and Morty</h2>;
            }}
          />
          <Route
            path="/homepage"
            render={() => {
              return <HomePage />;
            }}
          />
          <Route
            path="/cartpage/"
            render={() => {
              return <CartPage />;
            }}
          />
          <Route
            render={() => {
              return <h2>Page not Found</h2>;
            }}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
