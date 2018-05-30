import googleKey from './APIkey';

export const searchViaAuthorTitleISBN = async (query) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?key=${googleKey}&q=${query}`);
  console.log(response.json());
};

export const searchFreeEbooksByGenre = async (genre) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?key=AIzaSyDwf3i034XmIqxzvCyEhafOTlMlTscHNNE&filter=free-ebooks&q=${genre}`);
  const results = await response.json();
  const booksInfo = results.items.map(item => item.volumeInfo);
  return booksInfo;
};

