import React from 'react';

export const BooksDisplay = ({books}) => {
  const bookPreviews = books.map(book => {
    return (
      <div key={book.publishedDate}>
        <h4>{book.title}</h4>
        <h5>{book.subtitle}</h5>
        <h6>Author: {book.authors[0]}</h6>
        <img className='bookPreviewImg' src={book.imageLinks.smallThumbnail} />
      </div>
    )
  });

  return (
    <div>
      {bookPreviews}
    </div>
  );
};