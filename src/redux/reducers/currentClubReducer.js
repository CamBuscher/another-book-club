export const currentClubReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CLUB':
      return action.club;
    default:
      return state;
  }
};