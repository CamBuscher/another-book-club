import React from 'react';

export const BooksDisplay = ({books}) => {
  const bookPreviews = books.map(book => {
    let previewImage;

    !book.imageLinks ? 
      previewImage = 'https://www.freeiconspng.com/uploads/no-image-icon-23.jpg' :
      previewImage = book.imageLinks.smallThumbnail;

    let author ;
    
    !book.authors ? 
      author = 'Author not available' :
      author = book.authors[0];

    return (
      <div key={book.publishedDate}>
        <h4>{book.title}</h4>
        <h5>Author: {author}</h5>
        <img className='bookPreviewImg' src={previewImage} />
      </div>
    )
  });

  return (
    <div>
      {bookPreviews}
    </div>
  );
};