import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import history from '../utils/history'
import Home from '../pages/Home';

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Redirect path='/about' component={About} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;