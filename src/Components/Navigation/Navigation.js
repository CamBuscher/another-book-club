import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SignOutButton from '../Authentication/SignOut';

import * as routes from '../../constants/routes';

const Navigation = ({ authUser, history }) => 
  <div>
    {authUser
      ? <NavigationAuth history={history}/>
      : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = ({ history }) =>
  <ul className='nav-bar'>
    <li><Link to={routes.ACCOUNT}>Your book clubs</Link></li>
    <li><Link to={routes.ALL_CLUBS}>Browse all clubs</Link></li>
    <li><SignOutButton history={history}/></li>
  </ul>

const NavigationNonAuth = () =>
  <ul className='nav-bar'>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

export default Navigation;