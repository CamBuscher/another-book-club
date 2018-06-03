import React, { Component } from 'react';
import uniqid from 'uniqid';
import { db } from '../../firebase';
import { connect } from 'react-redux';
import './CreateBookClub.css'

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
  }

  byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
  });

  render() {
    const { clubName } = this.state

    return (
      <form onSubmit={this.handleSubmit}> 
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

export default connect(mapStateToProps)(CreateBookClub);