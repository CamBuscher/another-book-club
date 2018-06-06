import React from 'react'
import * as routes from '../../constants/routes';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../../firebase';

export const SignOutButton = ({history}) => {

  const signOut = () => {
    auth.doSignOut();
    history.push(routes.HOME);
  };
  
  return  (
    <button
      type="button"
      onClick={signOut}
    >
      Sign Out
    </button>
  );
};

export default withRouter(SignOutButton);