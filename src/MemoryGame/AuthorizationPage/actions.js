export const AUTHORIZATION_REQUEST = 'AUTHORIZATION_REQUEST';
export const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS';
export const AUTHORIZATION_FAILURE = 'AUTHORIZATION_FAILURE';

export const BOOTSTRAP_START = 'BOOTSTRAP_START';
export const BOOTSTRAP_FINISH = 'BOOTSTRAP_FINISH';

export const LOGOUT = 'LOGOUT';

export const authorizationRequest = (userData) => ({
  type: AUTHORIZATION_REQUEST,
  payload: userData,
});

export const authorizationSuccess = (userData) => ({
  type: AUTHORIZATION_SUCCESS,
  payload: userData,
});

export const authorizationFailure = () => ({
  type: AUTHORIZATION_FAILURE,
});

export const bootstrapStart = () => ({
  type: BOOTSTRAP_START,
});

export const bootstrapFinish = () => ({
  type: BOOTSTRAP_FINISH,
});

export const logout = () => ({
  type: LOGOUT,
});
