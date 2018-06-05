import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';
import { connect } from 'react-redux';
import { db } from '../../firebase';
import './CurrentClub.css';
import { addBookToClub } from '../../redux/actions/actions';
import WYSIWYG from '../WYSIWYG/Wysiwyg';

class CurrentClub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSearch : false
    };
  }

  addBookToClub = (books, book) => {
    db.addBookToClub(books, this.props.currentClub.id);
    this.props.addBookToClub(book);
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
        <img key={book.publishedDate} className='bookPreviewImg' src={previewImage} />
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
        <WYSIWYG />
      </div>
    );
  }
}

export const mapStateToProps = ({ currentClub }) => ({ currentClub });

export const mapDispatchToProps = dispatch => ({
  addBookToClub: book => dispatch(addBookToClub(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentClub);
