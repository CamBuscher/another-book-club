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

  handleGenreSearch = async (e) => {
    const genre = e.target.name;
    const searchResults = await APIcalls.searchFreeEbooksByGenre(genre);
    this.setState({ searchResults });
  }

  handleInputSearch = async (e) => {
    e.preventDefault();
    const searchResults = await APIcalls.searchViaAuthorTitleISBN(this.state.searchValue);
    this.setState({ searchResults });
  }

  render() {
    return (
      <div>
        <h3>Browse for some free e-books, or search for something more specific</h3>
        <button onClick={this.handleGenreSearch} name='mystery'>Mystery</button>
        <button onClick={this.handleGenreSearch} name='Science Fiction'>Science Fiction</button>
        <button onClick={this.handleGenreSearch} name='Romance'>Romance</button>
        <button onClick={this.handleGenreSearch} name='Biography'>Biography</button>
        <form onSubmit={this.handleInputSearch}>
          <input 
            placeholder='Search for some books' 
            value={this.state.searchValue} 
            onChange={(e) => { this.setState({searchValue : e.target.value}); }}
          />
          <button type='submit'>Search</button>
        </form>
        <BooksDisplay books={this.state.searchResults} />
      </div>
    );
  }
}

export default HomePage;