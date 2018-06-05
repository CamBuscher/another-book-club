import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';
import { connect } from 'react-redux';
import { db } from '../../firebase';
import './CurrentClub.css';

class CurrentClub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSearch : false
    }
  }

  addBookToClub = (books) => {
    db.addBookToClub(books, this.props.currentClub.id);
  }

  displayClubBooks = () => {
    return this.props.currentClub.books.map(book => {
      let previewImage;

      !book.imageLinks ?
        previewImage = 'https://www.freeiconspng.com/uploads/no-image-icon-23.jpg' :
        previewImage = book.imageLinks.thumbnail;

      let author;

      !book.authors ?
        author = 'Author not available' :
        author = book.authors[0];

      return (
        <div key={book.publishedDate} className='bookPreview'>
          <h4>{book.title}</h4>
          <img className='bookPreviewImg' src={previewImage} />
        </div>
      );
    });
  } 

  hasBooks = () => {
    if (this.props.currentClub.books) {
      return (
        <div>
          <h4>Books being discussed in this club</h4>
          <div className='clubBooks'>
            {this.displayClubBooks()}
          </div>
        </div>
      )
    } else {
      return <div></div>;
    }
  }

  showSearch = () => {
    if (this.state.showSearch === true) {
      return (
        <HomePage
          currentClub={this.props.currentClub}
          addBookToClub={this.addBookToClub}
        />
      );
    } else {
      return <button onClick={() => this.setState({ showSearch: true })}> Add a book </button>
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.currentClub.clubName}</h2>
        <hr />
        <div>
          {this.hasBooks()}
            {this.showSearch()}
          <hr />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = ({ currentClub }) => ({ currentClub });

export default connect(mapStateToProps)(CurrentClub);
