import { combineReducers } from 'redux';
import { memoryGameReducer } from '../pages/MainPage/reducer';

export const rootReducer = combineReducers({
  memoryGame: memoryGameReducer,
});
