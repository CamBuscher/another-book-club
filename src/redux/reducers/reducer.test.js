import { currentClubReducer } from './currentClubReducer';
import sessionReducer from './session';
import {userReducer} from './userReducer';

import * as actions from '../actions/actions';

describe('Current Club Reducer', () => {
  it('should return an empty object if there is no given state', () => {
    let expected = {};

    let actual = currentClubReducer(undefined, { type: '@@INIT' });

    expect(actual).toEqual(expected);
  });

  it('should return aclub object when receives the correct action', () => {
    let expected = {name: 'cam'};

    let actual = currentClubReducer(undefined, actions.setCurrentClub({ name: 'cam'}));

    expect(actual).toEqual(expected);
  });

  it('should return an object with abooks array if given book with appropriate action', () => {
    let expected = { books: [{ name: 'cam'}] };

    let actual = currentClubReducer(undefined, actions.addBookToClub({ name: 'cam' }));

    expect(actual).toEqual(expected);
  });

  it('should return an object with a comments array if given comment with appropriate action', () => {
    let expected = { comments: [{ name: 'cam' }] };

    let actual = currentClubReducer(undefined, actions.addCommentToClub({ name: 'cam' }));

    expect(actual).toEqual(expected);
  });
});

describe('sessionReducer', () => {
  it('should return an object with a null authUser if given no state', () => {
    let expected = {authUser: null};

    let actual = sessionReducer(undefined, { type: '@@INIT' });

    expect(actual).toEqual(expected);
  });
});

describe('userReducer', () => {
  it('should return an empty object if given no state', () => {
    let expected = {};

    let actual = userReducer(undefined, { type: '@@INIT' });

    expect(actual).toEqual(expected);
  });

  it('should return a user object whjen given correct action', () => {
    let expected = {name: 'cam'};

    let actual = userReducer({}, actions.setUser({name: 'cam'}));

    expect(actual).toEqual(expected);
  });

  it('should an updated club object whjen given correct action', () => {
    let expected = { "bookClubs": { "cams club": { "clubName": "cams club", "id": "3" }}};

    let actual = userReducer({}, actions.updateBookClubs({['cams club']: { clubName: 'cams club', id: '3', description: 'description' }}, 'cams club'));

    expect(actual).toEqual(expected);
  });

  it('should an updated clubs array whjen given correct action', () => {
    let expected = {bookClubs: [{
      book: 'hp'
    }]};

    let actual = userReducer({
      bookClubs: {
        camsClub: {
          book: 'hp'
        },
        courtsClub: {
          book: 'onyx'
        }
      }}, actions.removeBookClub('courtsClub'));

    expect(actual).toEqual(expected);
  });
});