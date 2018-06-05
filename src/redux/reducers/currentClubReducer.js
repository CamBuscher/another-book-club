export const currentClubReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CLUB':
      return action.club;
    case 'ADD_BOOK_TO_CLUB': 
      return {...state, books: [...state.books, action.book]};
    default:
      return state;
  }
};