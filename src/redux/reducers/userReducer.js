export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;

    case 'UPDATE_BOOK_CLUBS':
      return Object.assign(state, { bookClubs: { ...state.bookClubs, [action.clubName]: { id: action.club[action.clubName].id, clubName: action.club[action.clubName].clubName } } });
    default:
      return state;
  }
};