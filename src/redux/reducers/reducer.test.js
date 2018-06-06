import { currentClubReducer } from './currentClubReducer';

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