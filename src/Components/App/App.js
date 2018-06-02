import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage'
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navigation from '../Navigation/Navigation'
import SignUpPage from '../Authentication/SignUp'
import SignInPage from '../Authentication/SignIn'
import './App.css';

import * as routes from '../../constants/routes'
import { firebase } from '../../firebase'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authUser: null
    }
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  render() {
    return (
      
      <Router>
        <div className="App">
          <header className="App-header">
            <Navigation authUser={this.state.authUser} />
            <h1 className="App-title">Another book club</h1>
          </header>

          <Route
            exact path={routes.HOME}
            component={() => <HomePage />}
          />

          <Route
            exact path={routes.SIGN_UP}
            component={() => <SignUpPage />}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <SignInPage />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
