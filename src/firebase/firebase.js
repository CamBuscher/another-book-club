import firebase from 'firebase/app';
import { firebaseKEY } from '../Helpers/APIkey';
import 'firebase/auth';
import 'firebase/database'

const config = {
  apiKey: `${firebaseKEY}`,
  authDomain: "fir-tutorial-db803.firebaseapp.com",
  databaseURL: "https://fir-tutorial-db803.firebaseio.com",
  projectId: "fir-tutorial-db803",
  storageBucket: "fir-tutorial-db803.appspot.com",
  messagingSenderId: "318822888465"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} 

const db = firebase.database()
const auth = firebase.auth();

export {
  db,
  auth,
};