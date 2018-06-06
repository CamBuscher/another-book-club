import React, { Component } from 'react';
import { db } from '../../firebase/';
import { connect } from 'react-redux';
import { updateBookClubs } from '../../redux/actions/actions';
import PropTypes from 'prop-types';

export class AllBookClubs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clubs: []
    };
  }

  componentDidMount() {
    db.onceGetClubs()
      .then(data => data.val())
      .then((clubsObj) =>  {
        const clubs = Object.values(clubsObj);
        this.setState({ clubs });
      })
      .catch(err => []);
  }

  addClub = (club) => {
    const { clubName, id, description } = club;
    db.joinBookClub(this.props.user, club);
    this.props.updateBookClubs({[clubName]: {clubName, id, description}}, clubName);
  }

  renderClubs = () => {
    const clubs = this.state.clubs.map(club => {
      const userClubs = Object.keys(this.props.user.bookClubs || {})
      const enterCheck = () => {
        if (userClubs.includes(club.clubName)) {
          return <p>You're already in this club!</p>;
        } else {
          return <button onClick={() => this.addClub(club)}>Join Club</button>;
        }
      };
      return (
        <div className='bookClub' key={club.id}>
          <h3 >{club.clubName}</h3>
          <p>{club.description}</p>
          {enterCheck()}
        </div>
      );
    });
    return clubs;
  }

  render() {
    return (
      <div>
        {this.renderClubs()}
      </div>
    );
  }
}

AllBookClubs.propTypes = {
  updateBookClubs: PropTypes.func,
  user: PropTypes.obj
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  updateBookClubs: (club, clubName) => dispatch(updateBookClubs(club, clubName))
});


export default connect(mapStateToProps, mapDispatchToProps)(AllBookClubs);