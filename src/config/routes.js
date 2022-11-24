import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Api from '../reducers/api';

const Routes = () => {
    return (
        <div>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Api></Api>
            </Route>
          </Switch>
        </Router>
        </div>
    );
};

export default Routes;