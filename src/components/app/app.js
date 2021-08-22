import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';

const App = () => {
  return (
    <div className="container">
      <Router>
        <ErrorBoundry>
          <h1>Header</h1>
          <Switch>
            <Route />
            <Route />
            <Route />
            <Route />
            <Route />
          </Switch>
        </ErrorBoundry>
      </Router>
    </div>
  );
};

export default App;
