import { googleKEY } from './APIkey';

export const searchViaAuthorTitleISBN = async (query) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?key=${googleKEY}&q=${query}`);
  const results = await response.json();
  const booksInfo = results.items.map(item => item.volumeInfo);
  return booksInfo;
};

