import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import {
  authorizationMiddleware, bootstrapMiddleware, logoutMiddleware, resultsMiddleware,
} from '../MemoryGame';

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    authorizationMiddleware,
    bootstrapMiddleware,
    logoutMiddleware,
    resultsMiddleware,
  ),
));
