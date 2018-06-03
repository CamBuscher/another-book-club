import { db } from './firebase';

export const doCreateUser = (id, username, email) => 
  db.ref(`users/${id}`).set({
    username,
    email,
    id
  });

export const updateUserBookClubs = (user, newClub) => {
  const existingClubs = user.bookClubs || [];
  const updatedUser = Object.assign({...user}, {bookClubs: [...existingClubs, newClub]})
  db.ref(`users/${user.id}/bookClubs/${newClub.clubName}`).set({...newClub});
};

export const doCreateBookClub = (id, clubName, member) =>
  db.ref(`bookClubs/${id}`).set({
    clubName,
    members: [...member],
    id
  });

export const onceGetUsers = () => 
  db.ref('users').once('value');