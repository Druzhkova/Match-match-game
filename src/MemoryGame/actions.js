// login page

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const BOOTSTRAP_START = 'BOOTSTRAP_START';
export const BOOTSTRAP_FINISH = 'BOOTSTRAP_FINISH';

export const CHANGE_DIFFICULTY_GAME = 'CHANGE_DIFFICULTY_GAME';
export const CHANGE_SKIRT_CARD = 'CHANGE_SKIRT_CARD';

export const LOGOUT = 'LOGOUT';

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

// User profile

export function changeDifficultyGame(difficultyGame) {
  return {
    type: CHANGE_DIFFICULTY_GAME,
    payload: difficultyGame,
  };
}

export function changeSkirtCard(card) {
  return {
    type: CHANGE_SKIRT_CARD,
    payload: card,
  };
}
