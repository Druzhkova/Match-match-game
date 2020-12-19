import { combineReducers } from 'redux';
import { memoryGameReducer } from '../MemoryGame';

export const rootReducer = combineReducers({
  memoryGame: memoryGameReducer,
});
