import React, { Component } from 'react';
import uniqid from 'uniqid';
import { db } from '../../firebase';
import { connect } from 'react-redux';
import { updateBookClubs } from '../../redux/actions/actions';
import './CreateBookClub.css';

class CreateBookClub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clubName: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    const { clubName } = this.state;
    const { user } = this.props;
    const newClub = {
      id, 
      clubName 
    };
    db.doCreateBookClub(id, clubName, [{...user}]);
    db.updateUserBookClubs(user, newClub);
    this.props.updateBookClubs({[clubName]: {clubName, id}}, clubName);
  }

  byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
  });

  render() {
    const { clubName } = this.state

    return (
      <form onSubmit={this.handleSubmit} className='createClubForm'> 
        <h3>Make a new book club</h3>
        <input 
          value={clubName}
          onChange={event => this.setState(this.byPropKey('clubName', event.target.value))}
          type="text"
          placeholder="What would you like to name your book club?"
        />
        <button type='submit'>Create </ button>
        <hr />
      </form>
    )
  }
}

export const mapStateToProps = ({user}) => ({ user });

export const mapDispatchToProps = dispatch => ({
  updateBookClubs: (club, clubName) => dispatch(updateBookClubs(club, clubName))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBookClub);