export const currentClubReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CLUB':
      return action.club;
    case 'ADD_BOOK_TO_CLUB': 
      if (!state.books) {
        state.books = [];
      }
      return {...state, books: [...state.books, action.book]};
    case 'ADD_COMMENT_TO_CLUB':
      if (!state.comments) {
        state.comments = [];
      }
      return {...state, comments: [...state.comments, action.comment]};
    default:
      return state;
  }
};