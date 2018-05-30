import googleKey from './APIkey';

const searchViaAuthorTitleISBN = async (query) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?key=${googleKey}&q=${query}`);
  console.log(response.json())
};

export default searchViaAuthorTitleISBN