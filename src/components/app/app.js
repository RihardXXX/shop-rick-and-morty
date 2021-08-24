import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';

import './app.css';

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
              return (
                <div className="main">
                  <h2> Добро пожаловать в магазин Рик и Морти</h2>
                  <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" />
                </div>
              );
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
