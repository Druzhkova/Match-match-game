import { combineReducers } from 'redux';
import { matchMatchGameReduser } from '../MatchMatchGame';

export const rootReducer = combineReducers({ matchMatchGame: matchMatchGameReduser });
