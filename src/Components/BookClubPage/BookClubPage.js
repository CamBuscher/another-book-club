import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateBookClub from '../CreateBookClub/CreateBookClub';
import { db } from '../../firebase';
import './BookClubPage.css';

class BookClubPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredClubs: []
    };
  }

  filterClubs = (userClubs) => {
    db.onceGetClubs()
      .then(data => data.val())
      .then(clubs => {
        const ids = Object.keys(clubs);
        const filteredIds = ids.filter(id => {
          return userClubs.includes(id)
        });
        return filteredIds.map(id => clubs[id]);
      })
      .then(filteredClubs => this.setState({ filteredClubs }));
  }

  componentDidMount() {
    const userClubs = Object.keys(this.props.userClubs || {}).map(key => this.props.userClubs[key].id);
    this.filterClubs(userClubs);
  }

  componentWillReceiveProps(nextProps) {
    const shouldUpdate = Object.keys(this.props.userClubs || {}).length !== Object.keys(nextProps.userClubs).length;
    if (shouldUpdate) {
      const userClubs = Object.keys(nextProps.userClubs || {}).map(key => nextProps.userClubs[key].id);
      this.filterClubs(userClubs);
    }
  }

  renderClubs = () => {
    return this.state.filteredClubs.map(club => {
      return (
        <h3 key={club.id}>{club.clubName}</h3>
      );
    });
  }

  render() {
    return (
      <div>
        <CreateBookClub />
        <h2 className='userClubList'>Your book clubs</h2>
        {this.renderClubs()}
      </div>
    );
  }
};

export const mapStateToProps = (state) => ({ userClubs: state.user.bookClubs });

// export const mapDispatchToProps = dispatch => ({
//   setUser: (user) => dispatch(setUser(user))
// });

export default connect(mapStateToProps)(BookClubPage);