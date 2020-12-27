// login page

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const RESULTS_REQUEST = 'RESULTS_REQUEST';
export const RESULTS_SUCCESS = 'RESULTS_SUCCESS';

export const BOOTSTRAP_START = 'BOOTSTRAP_START';
export const BOOTSTRAP_FINISH = 'BOOTSTRAP_FINISH';

export const LOGOUT = 'LOGOUT';

export const CHANGE_STATUS_GAME = 'CHANGE_STATUS_GAME';
export const CHANGE_WIDTH_GAME_BOARD = 'CHANGE_WIDTH_GAME_BOARD';
export const CHANGE_SKIRT_CARD = 'CHANGE_SKIRT_CARD';

export const loginRequest = (userData) => ({
  type: LOGIN_REQUEST,
  payload: userData,
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const resultsRequest = (result) => ({
  type: RESULTS_REQUEST,
  payload: result,
});

export const resultsSuccess = (result) => ({
  type: RESULTS_SUCCESS,
  payload: result,
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

export function changeWidthGameBoard(width) {
  return {
    type: CHANGE_WIDTH_GAME_BOARD,
    payload: width,
  };
}

export function changeSkirtCard(card) {
  return {
    type: CHANGE_SKIRT_CARD,
    payload: card,
  };
}

export function changeStatusGame(status) {
  return {
    type: CHANGE_STATUS_GAME,
    payload: status,
  };
}
