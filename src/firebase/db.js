import { db } from './firebase';

export const doCreateUser = (id, username, email) => 
  db.ref(`users/${id}`).set({
    username,
    email,
    id
  });

export const doCreateBookClub = (id, clubName, member) =>
  db.ref(`bookClubs/${id}`).set({
    clubName,
    members: [...member],
    id
  });

export const onceGetUsers = () => 
  db.ref('users').once('value');