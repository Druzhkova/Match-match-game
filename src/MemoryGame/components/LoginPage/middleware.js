import {
  LOGIN_REQUEST,
  loginSuccess,
  loginFailure,
  BOOTSTRAP_START,
  bootstrapFinish,
  LOGOUT,
} from './actions';

export const authorizationMiddleware = (store) => (next) => (action) => {
  try {
    if (action.type === LOGIN_REQUEST) {
      localStorage.setItem('isAuthorized', JSON.stringify(action.payload));
      store.dispatch(loginSuccess(JSON.parse(localStorage.getItem('isAuthorized'))));
    }
  } catch (e) {
    store.dispatch(loginFailure());
  }

  next(action);
};

export const bootstrapMiddleware = (store) => (next) => (action) => {
  if (action.type === BOOTSTRAP_START) {
    const isAuthorized = localStorage.getItem('isAuthorized');
    if (isAuthorized) {
      store.dispatch(loginSuccess(JSON.parse(localStorage.getItem('isAuthorized'))));
    } else {
      store.dispatch(loginFailure());
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
