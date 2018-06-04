import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';
import { connect } from 'react-redux';

class CurrentClub extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props.currentClub)
  }

  render() {
    return (
      <div>
        <h2>{this.props.currentClub.clubName}</h2>
        <hr />
        <h3> SEARCH FOR A BOOK TO ADD TO YOUR CLUB</h3>
        <HomePage />
      </div>
    );
  }
}

export const mapStateToProps = ({ currentClub }) => ({ currentClub });

export default connect(mapStateToProps)(CurrentClub);
