import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';
import './App.css';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setUser } from '../../redux/actions/actions';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import SignUpPage from '../Authentication/SignUp';
import SignInPage from '../Authentication/SignIn';
import BookClubPage from '../BookClubPage/BookClubPage';
import CurrentClub from '../CurrentClub/CurrentClub';
import AllBookClubs from '../AllBookClubs/AllBookClubs';

import * as routes from '../../constants/routes';
import { firebase, db } from '../../firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.authUser !== null) {
      const users = await db.onceGetUsers();
      const currentUser = await users.val()[this.state.authUser.uid];
      await this.props.setUser(currentUser);
    } else {
      this.props.setUser({});
    }
  }

  render() {
    return (
      
      <Router>
        <div className="App">
          <header className="App-header">
            <Navigation authUser={this.state.authUser} />
            <h1 className="App-title">Another book club</h1>
          </header>

          {this.state.authUser
            ? <Route
              exact path={routes.HOME}
              component={() => <BookClubPage />}
            />
            : <Route
              exact path={routes.HOME}
              component={() => <SignInPage />}
            />
          }

          <Route
            exact path={routes.SIGN_UP}
            component={() => <SignUpPage />}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <SignInPage />}
          />

          <Route
            exact path={routes.ACCOUNT}
            component={() => <BookClubPage />}
          />

          <Route 
            exact path={routes.CURRENT_CLUB} 
            component={() => <CurrentClub />} 
          />

          <Route 
            exact path={routes.ALL_CLUBS}
            component={() => <AllBookClubs />}
          />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  setUser: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({ 
  setUser: (user) => dispatch(setUser(user))
});

export default connect(null, mapDispatchToProps)(App);
