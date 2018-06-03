import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../Authentication/SignOut';

import * as routes from '../../constants/routes';

const Navigation = ({ authUser }) => 
  <div>
    {authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
  <ul className='nav-bar'>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Your book clubs</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <ul className='nav-bar'>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

export default Navigation;