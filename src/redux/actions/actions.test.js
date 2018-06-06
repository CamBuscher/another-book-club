import * as actions from './actions';

describe('SET USER', () => {
  it('should return an action object', () => {
    let expected = {
      type: 'SET_USER',
      user: {name: 'cam'}
    };
    let actual = actions.setUser({name: 'cam'});

    expect(actual).toEqual(expected);
  });
});

describe('UPDATE BOOK CLUBS', () => {
  it('should return an action object', () => {
    let expected = {
      "club": { "cam": { "clubName": "cam", "description": "description", "id": "3" } }, "clubName": "cam", "type": "UPDATE_BOOK_CLUBS"
    };
    let actual = actions.updateBookClubs({
      'cam': { clubName: 'cam', id: '3', description: 'description' }
    }, 'cam');

    expect(actual).toEqual(expected);
  });
});