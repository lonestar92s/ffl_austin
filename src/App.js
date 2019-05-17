import React, { Component } from 'react';
import League from './League/League.js';
import Member from './Member/Member.js'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'



export default class App extends Component {

    render() {

        return (
          <Router>

          <nav>
          <Link to='/members'>Members</Link>{' '}
          </nav>
          <Switch>
          <Route path ='/members' component={League} />
          <Route path='/member/:name' component={Member} />
          </Switch>
          </Router>
        );
    }
}