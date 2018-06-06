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

describe('Remove book club', () => {
  it('should return an action object', () => {
    let expected = {
      type: 'REMOVE_CLUB',
      clubName: 'cam'
    };
    let actual = actions.removeBookClub('cam');

    expect(actual).toEqual(expected);
  });
});

describe('Set current cluba', () => {
  it('should return an action object', () => {
    let expected = {
      type: 'SET_CURRENT_CLUB',
      club: {name: 'cam'}
    };
    let actual = actions.setCurrentClub({ name: 'cam' });

    expect(actual).toEqual(expected);
  });
});

describe('add book to club', () => {
  it('should return an action object', () => {
    let expected = {
      type: 'ADD_BOOK_TO_CLUB',
      book: { name: 'cam' }
    };
    let actual = actions.addBookToClub({ name: 'cam' });

    expect(actual).toEqual(expected);
  });
});

describe('add comment to club', () => {
  it('should return an action object', () => {
    let expected = {
      type: 'ADD_COMMENT_TO_CLUB',
      comment: { name: 'cam' }
    };
    let actual = actions.addCommentToClub({ name: 'cam' });

    expect(actual).toEqual(expected);
  });
});