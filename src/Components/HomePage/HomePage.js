import React, { Component } from 'react';
import * as APIcalls from '../../Helpers/APIcalls';
import { BooksDisplay } from '../BooksDisplay/BooksDisplay';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue : '',
      searchResults : []
    };
  }

  handleInputSearch = async (e) => {
    e.preventDefault();
    const searchResults = await APIcalls.searchViaAuthorTitleISBN(this.state.searchValue);
    this.setState({ searchResults });
  }

  render() {
    return (
      <div>
        <h5>Search for a book</h5>
        <form onSubmit={this.handleInputSearch}>
          <input 
            placeholder='Search for some books' 
            value={this.state.searchValue} 
            onChange={(e) => { this.setState({searchValue : e.target.value}); }}
          />
          <button type='submit'>Search</button>
        </form>
        <BooksDisplay 
          books={this.state.searchResults} 
          currentClub={this.props.currentClub}
          addBookToClub={this.props.addBookToClub}
        />
      </div>
    );
  }
}

export default HomePage;