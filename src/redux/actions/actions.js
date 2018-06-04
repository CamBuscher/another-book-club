export const setUser = user => ({
  type: 'SET_USER',
  user
});

export const updateBookClubs = (club, clubName) => ({
  type: 'UPDATE_BOOK_CLUBS',
  club,
  clubName
});

export const removeBookClub = (clubName) => ({
  type: 'REMOVE_CLUB',
  clubName
});

export const setCurrentClub = club => ({
  type: 'SET_CURRENT_CLUB',
  club
});

export const addBookToClub = club => ({
  type: 'ADD_BOOK_TO_CLUB',
  club
});