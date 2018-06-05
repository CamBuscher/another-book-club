import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import * as Routes from '../../constants/routes'
import CreateBookClub from '../CreateBookClub/CreateBookClub';
import { removeBookClub, setCurrentClub } from '../../redux/actions/actions';

import { db } from '../../firebase';
import './BookClubPage.css';

class BookClubPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredClubs: []
    };
  }

  enterClub = club => {
    this.props.setCurrentClub(club);
    this.props.history.push(Routes.CURRENT_CLUB)
  }

  removeClub = async (clubName) => {
    const filteredClubs = this.state.filteredClubs.filter(club => club.clubName !== clubName);
    this.props.removeBookClub(clubName);
    
    const response = await db.onceGetUserBookClubs(this.props.userId)
    const clubs = await response.val();
    const newClubs = Object.assign({...clubs}, {[clubName]: null});
    await db.removeUserBookClub(newClubs, this.props.userId);

    this.setState({filteredClubs});
  }

  filterClubs = (userClubs) => {
    db.onceGetClubs()
      .then(data => data.val())
      .then((clubs) => {
        const ids = Object.keys(clubs);
        const filteredIds = ids.filter(id => {
          return userClubs.includes(id);
        });
        return filteredIds.map(id => clubs[id]);
      })
      .then(filteredClubs => this.setState({ filteredClubs }))
      .catch(err => []);
  }

  componentDidMount() {
    const userClubs = Object.keys(this.props.userClubs || {}).map(key => this.props.userClubs[key].id);
    this.filterClubs(userClubs);
  }

  componentWillReceiveProps(nextProps) {
    const shouldUpdate = Object.keys(this.props.userClubs || {}).length !== Object.keys(nextProps.userClubs || {}).length;
    if (shouldUpdate) {
      const userClubs = Object.keys(nextProps.userClubs || {}).map(key => nextProps.userClubs[key].id);
      this.filterClubs(userClubs);
    }
  }

  renderClubs = () => {
    return this.state.filteredClubs.map(club => {
      const deleteAbility = () => {
        let display = <div></div>
        if (club.admin === this.props.userId) {
          display = <button onClick={() => this.removeClub(club.clubName)}>Delete club </button>
        } 
        return display;
      };

      return (
        <div className='bookClub' key={club.id}>
          <h3 >{club.clubName}</h3>
          <p>{club.description}</p>
          <button onClick={() => this.enterClub(club)}>Enter Club</button>
          {deleteAbility()}
        </div>
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

export const mapStateToProps = (state) => ({ 
  userClubs: state.user.bookClubs,
  userId: state.user.id
});

export const mapDispatchToProps = dispatch => ({
  removeBookClub: (clubName) => dispatch(removeBookClub(clubName)),
  setCurrentClub: (club) => dispatch(setCurrentClub(club))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookClubPage));