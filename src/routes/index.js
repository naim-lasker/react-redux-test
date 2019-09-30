import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import history from '../utils/history'
import Home from '../pages/Home';
import About from '../pages/About';

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          {/* <Redirect  component={About} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;