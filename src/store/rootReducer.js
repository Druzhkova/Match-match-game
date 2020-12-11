import { combineReducers } from 'redux';
import { mainPageReduser } from '../MemoryGame/MainPage';
import { loginPageReducer } from '../MemoryGame/LoginPage';

export const rootReducer = combineReducers({
  mainPage: mainPageReduser,
  loginPage: loginPageReducer,
});
