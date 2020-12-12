import { combineReducers } from 'redux';
import { mainPageReduser } from '../MemoryGame/MainPage';
import { UserProfileReducer } from '../MemoryGame/UserProfile';

export const rootReducer = combineReducers({
  mainPage: mainPageReduser,
  userProfile: UserProfileReducer,
});
