import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../Authentication/SignOut';

import * as routes from '../../constants/routes';
import PropTypes from 'prop-types';

const Navigation = ({ authUser, history }) => 
  <div>
    {authUser
      ? <NavigationAuth history={history}/>
      : <NavigationNonAuth />
    }
  </div>;

const NavigationAuth = ({ history }) =>
  <div className='banner'>
    <h1 className="App-title">Another book club</h1>
    <ul className='nav-bar'>
      <li><Link to={routes.ACCOUNT}>Your book clubs</Link></li>
      <li><Link to={routes.ALL_CLUBS}>Browse all clubs</Link></li>
      <li><SignOutButton history={history}/></li>
    </ul>
  </div>;
const NavigationNonAuth = () =>
  <div className='banner'>
    <h1 className="App-title">Another book club</h1>
    <ul className='nav-bar'>
      <li> </li>
    </ul>
  </div>;

export default Navigation;

Navigation.propTypes = {
  history: PropTypes.object,
  authUser: PropTypes.object
};