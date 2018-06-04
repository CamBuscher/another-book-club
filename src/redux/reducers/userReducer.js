export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    case 'UPDATE_BOOK_CLUBS':
      return {...state, bookClubs: { ...state.bookClubs, [action.clubName]: { id: action.club[action.clubName].id, clubName: action.club[action.clubName].clubName } } } ;
    case 'REMOVE_CLUB':
      return {
        ...state, 
        bookClubs: Object.keys(state.bookClubs).filter(club => club !== action.clubName).map(key => state.bookClubs[key])
      };
    default:
      return state;
  }
};