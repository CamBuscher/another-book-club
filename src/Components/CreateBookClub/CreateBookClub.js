import React, { Component } from 'react';
import uniqid from 'uniqid';
import { db } from '../../firebase';
import { connect } from 'react-redux';

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
    db.doCreateBookClub(id, clubName, [{...user}]);
  }

  byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
  });

  render() {
    const { clubName } = this.state

    return (
      <form onSubmit={this.handleSubmit}> 
        <input 
          value={clubName}
          onChange={event => this.setState(this.byPropKey('clubName', event.target.value))}
          type="text"
          placeholder="What would you like to name your book club?"
        />
        <button type='submit'>Create </ button>
      </form>
    )
  }
}

export const mapStateToProps = ({user}) => ({ user });

export default connect(mapStateToProps)(CreateBookClub);