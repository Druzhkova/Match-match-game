// login page

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const BOOTSTRAP_START = 'BOOTSTRAP_START';
export const BOOTSTRAP_FINISH = 'BOOTSTRAP_FINISH';

export const CHANGE_WIDTH_GAME_BOARD = 'CHANGE_WIDTH_GAME_BOARD';
export const CHANGE_SKIRT_CARD = 'CHANGE_SKIRT_CARD';

export const OPEN_CARD = 'OPEN_CARD';
export const DONE_CARD = 'DONE_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export const LOGOUT = 'LOGOUT';

export const CHANGE_STATUS_GAME = 'CHANGE_STATUS_GAME';
export const CHANGE_STATUS_CARD = 'CHANGE_STATUS_CARD';

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

export function openCard(status) {
  return {
    type: OPEN_CARD,
    payload: status,
  };
}

export function doneCard(status) {
  return {
    type: DONE_CARD,
    payload: status,
  };
}

export function deleteCard(idCard) {
  return {
    type: DELETE_CARD,
    payload: idCard,
  };
}

export function changeStatusGame(status) {
  return {
    type: CHANGE_STATUS_GAME,
    payload: status,
  };
}

export function changeStatusCard(status) {
  return {
    type: CHANGE_STATUS_CARD,
    payload: status,
  };
}
