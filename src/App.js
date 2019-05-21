import React, { Component } from 'react';
import League from './League/League.js';
import Member from './Member/Member.js';
import LandingPage from './LandingPage/LandingPage.js';

import './App.css'
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
          <div className="Main">
          <nav>
          <Link to='/'>Home</Link>{' '}
          <Link to='/members'>Members</Link>{' '}
          </nav>
          <Switch>
          <Route  exact path ='/' component={LandingPage} />
          <Route path ='/members' component={League} />
          <Route path='/member/:name' component={Member} />
          </Switch>
          </div>
          </Router>
        );
    }
}

       