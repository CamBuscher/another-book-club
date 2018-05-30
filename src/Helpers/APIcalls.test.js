import * as APIkeys from './APIcalls';
import googleKey from './APIkey';

describe('APIcalls', () => {
  let mockBookData;

  describe('searchViaAuthorTitleISBN', () => {
    beforeEach(() => {
      mockBookData =  [{volumeInfo: 'Annihilation'}];

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({
          items: mockBookData
        })
      }));
    });

    it('should call fetch with correct paramaters', async () => {
      const expected = `https://www.googleapis.com/books/v1/volumes?key=${googleKey}&q=annihilation`;

      await APIkeys.searchViaAuthorTitleISBN('annihilation');

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should return an array of book data', async () => {
      const expected = ['Annihilation'];

      const result = await APIkeys.searchViaAuthorTitleISBN('annihalation');

      expect(result).toEqual(expected);
    });
  });

  describe('searchFreeEbooksByGenre', () => {
    beforeEach(() => {
      mockBookData = [{ volumeInfo: 'Annihilation' }];

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({
          items: mockBookData
        })
      }));
    });

    it('should call fetch with correct paramaters', async () => {
      const expected = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyDwf3i034XmIqxzvCyEhafOTlMlTscHNNE&filter=free-ebooks&q=mystery`;

      await APIkeys.searchFreeEbooksByGenre('mystery');

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should return an array of book data', async () => {
      const expected = ['Annihilation'];

      const result = await APIkeys.searchFreeEbooksByGenre('mystery');

      expect(result).toEqual(expected);
    });
  });
});