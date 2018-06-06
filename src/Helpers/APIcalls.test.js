import * as APIkeys from './APIcalls';
import { googleKEY } from './APIkey';

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
      const expected = `https://www.googleapis.com/books/v1/volumes?key=${googleKEY}&q=annihilation`;

      await APIkeys.searchViaAuthorTitleISBN('annihilation');

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should return an array of book data', async () => {
      const expected = ['Annihilation'];

      const result = await APIkeys.searchViaAuthorTitleISBN('annihalation');

      expect(result).toEqual(expected);
    });
  });
});