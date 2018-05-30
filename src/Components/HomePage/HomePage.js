import React, { Component } from 'react';
import * as APIcalls from '../../Helpers/APIcalls';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults : {}
    }
  }

  handleGenreSearch = async (e) => {
    const genre = e.target.name;
    const searchResults = await APIcalls.searchFreeEbooksByGenre(genre);
    this.setState({ searchResults });
  }

  render() {
    return (
      <div>
        <h3>Browse for some free e-books, or search for something more specific</h3>
        <button onClick={this.handleGenreSearch} name='mystery'>Mystery</button>
      </div>
    );
  }
}

export default HomePage