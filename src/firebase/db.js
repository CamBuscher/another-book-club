import { db } from './firebase';

export const doCreateUser = (id, username, email) => 
  db.ref(`users/${id}`).set({
    username,
    email,
    id
  });

export const updateUserBookClubs = (user, newClub) => {
  const existingClubs = user.bookClubs || [];
  const updatedUser = Object.assign({...user}, {bookClubs: [...existingClubs, newClub]});
  db.ref(`users/${user.id}/bookClubs/${newClub.clubName}`).set({...newClub});
};

export const doCreateBookClub = (id, clubName, member) =>
  db.ref(`bookClubs/${id}`).set({
    clubName,
    members: [...member],
    id,
    admin: member
  });

export const onceGetUsers = () => 
  db.ref('users').once('value');

export const onceGetUserBookClubs = (id) => 
  db.ref(`users/${id}/bookClubs`).once('value');

export const removeUserBookClub = (clubs, id) => {
  db.ref(`users/${id}/bookClubs`).set({...clubs});
}

export const onceGetClubs = () => 
  db.ref('bookClubs').once('value');