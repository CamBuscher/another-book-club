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