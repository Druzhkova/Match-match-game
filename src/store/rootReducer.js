import { combineReducers } from 'redux';
import { mainPageReduser } from '../MainPage';

export const rootReducer = combineReducers({ matchMatchGame: mainPageReduser });
