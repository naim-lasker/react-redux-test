import React, { Component } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import history from '../utils/history'
import Home from '../pages/Home';
import About from '../pages/About';

class Routes extends Component {
  render() {
    return (
      <Router history={history} >
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
          {/* <Redirect  component={About} /> */}
          {console.log(process.env.PUBLIC_URL)}
          
        </Switch>
      </Router>
    );
  }
}

export default Routes;