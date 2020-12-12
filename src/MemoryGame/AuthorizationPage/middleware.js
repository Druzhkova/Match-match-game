import {
  AUTHORIZATION_REQUEST,
  authorizationSuccess,
  authorizationFailure,
  BOOTSTRAP_START,
  bootstrapFinish,
  LOGOUT,
} from './actions';

export const authorizationMiddleware = (store) => (next) => (action) => {
  try {
    if (action.type === AUTHORIZATION_REQUEST) {
      localStorage.setItem('isAuthorized', JSON.stringify(action.payload));
      store.dispatch(authorizationSuccess(JSON.parse(localStorage.getItem('isAuthorized'))));
    }
  } catch (e) {
    store.dispatch(authorizationFailure());
  }

  next(action);
};

export const bootstrapMiddleware = (store) => (next) => (action) => {
  if (action.type === BOOTSTRAP_START) {
    const isAuthorized = localStorage.getItem('isAuthorized');
    if (isAuthorized) {
      store.dispatch(authorizationSuccess(JSON.parse(localStorage.getItem('isAuthorized'))));
    } else {
      store.dispatch(authorizationFailure());
    }
    store.dispatch(bootstrapFinish());
  }

  next(action);
};

export const logoutMiddleware = () => (next) => (action) => {
  if (action.type === LOGOUT) {
    localStorage.removeItem('isAuthorized');
  }

  next(action);
};
