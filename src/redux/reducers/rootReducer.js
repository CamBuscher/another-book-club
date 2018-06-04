import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { currentClubReducer } from './currentClubReducer';

const rootReducer = combineReducers({
  user: userReducer,
  currentClub: currentClubReducer
});

export default rootReducer;