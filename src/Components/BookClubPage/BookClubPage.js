import React from 'react';
import { connect } from 'react-redux';
import CreateBookClub from '../CreateBookClub/CreateBookClub';

const BookClubPage = (props) => {
  

  return (
    <div>
      <CreateBookClub />
    </div>
  );
};

export const mapStateToProps = ({ user }) => ({ user });

// export const mapDispatchToProps = dispatch => ({
//   setUser: (user) => dispatch(setUser(user))
// });

export default connect(mapStateToProps)(BookClubPage);