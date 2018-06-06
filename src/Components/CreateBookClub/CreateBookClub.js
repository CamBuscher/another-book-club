import React, { Component } from 'react';
import uniqid from 'uniqid';
import { db } from '../../firebase';
import { connect } from 'react-redux';
import { updateBookClubs } from '../../redux/actions/actions';
import './CreateBookClub.css';
import PropTypes from 'prop-types';

export class CreateBookClub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clubName: '',
      description: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    const { clubName, description } = this.state;
    const { user } = this.props;
    const newClub = {
      id, 
      clubName 
    };
    db.doCreateBookClub(id, clubName, [{...user}], description);
    db.updateUserBookClubs(user, newClub);
    this.props.updateBookClubs({[clubName]: {clubName, id, description}}, clubName);
  }

  byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
  });

  render() {
    const { clubName, description } = this.state

    return (
      <form onSubmit={this.handleSubmit} className='createClubForm'> 
        <h2>Make a new book club</h2>
        <input 
          value={clubName}
          onChange={event => this.setState(this.byPropKey('clubName', event.target.value))}
          type="text"
          placeholder="What would you like to name your book club?"
        />
        <br />
        <input
          value={description}
          onChange={event => this.setState(this.byPropKey('description', event.target.value))}
          type="text"
          placeholder="Describe your book club?"
        />
        <br />
        <button type='submit'>Create </ button>
        <hr />
      </form>
    )
  }
}

CreateBookClub.propTypes = {
  user: PropTypes.object,
  updateBookClubs: PropTypes.func
};

export const mapStateToProps = ({user}) => ({ user });

export const mapDispatchToProps = dispatch => ({
  updateBookClubs: (club, clubName) => dispatch(updateBookClubs(club, clubName))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBookClub);