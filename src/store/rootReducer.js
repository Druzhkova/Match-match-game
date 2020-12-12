import { combineReducers } from 'redux';
import { authorizationReducer, UserProfileReducer, mainPageReduser } from '../MemoryGame';

export const rootReducer = combineReducers({
  mainPage: mainPageReduser,
  userProfile: UserProfileReducer,
  authorizationPage: authorizationReducer,
});
