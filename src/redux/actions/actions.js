export const setUser = user => ({
  type: 'SET_USER',
  user
});

export const updateBookClubs = (club, clubName) => ({
  type: 'UPDATE_BOOK_CLUBS',
  club,
  clubName
});

export const removeBookClub = (club) => ({
  type: 'REMOVE_CLUB',
  club
});