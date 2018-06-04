import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';
import { connect } from 'react-redux';
import { db } from '../../firebase';

class CurrentClub extends Component {
  constructor(props) {
    super(props);
  }

  addBookToClub = (books) => {
    db.addBookToClub(books, this.props.currentClub.id)
  }

  render() {
    return (
      <div>
        <h2>{this.props.currentClub.clubName}</h2>
        <hr />
        <h3> SEARCH FOR A BOOK TO ADD TO YOUR CLUB</h3>
        <HomePage 
          currentClub={this.props.currentClub}
          addBookToClub={this.addBookToClub}
        />
      </div>
    );
  }
}

export const mapStateToProps = ({ currentClub }) => ({ currentClub });

export default connect(mapStateToProps)(CurrentClub);
