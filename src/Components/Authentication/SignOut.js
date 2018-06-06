import React from 'react';
import * as routes from '../../constants/routes';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import PropTypes from 'prop-types';

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

SignOutButton.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignOutButton);