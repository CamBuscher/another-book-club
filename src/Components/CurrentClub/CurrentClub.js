import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentClub extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export const mapStateToProps = ({ CurrentClub }) => ({ CurrentClub });

export default connect(mapStateToProps)(CurrentClub);
