import { combineReducers } from 'redux';
import { authorizationReducer, UserProfileReducer, mainPageReduser } from '../MemoryGame/components';

export const rootReducer = combineReducers({
  mainPage: mainPageReduser,
  userProfile: UserProfileReducer,
  loginPage: authorizationReducer,
});
