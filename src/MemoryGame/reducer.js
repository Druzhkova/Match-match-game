import {
  LOGIN_SUCCESS, LOGIN_FAILURE, BOOTSTRAP_FINISH, LOGOUT, CHANGE_DIFFICULTY_GAME, CHANGE_SKIRT_CARD,
} from './actions';

const initialState = {
  userData: {},
  isAuthorized: false,
  bootstraped: false,
  difficultyGame: '',
  skirtCard: '',
};

export function memoryGameReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthorized: true,
        userData: action.payload,
      };
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuthorized: false,
      };
    }

    case BOOTSTRAP_FINISH: {
      return {
        ...state,
        bootstraped: true,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        isAuthorized: false,
        userData: {},
      };
    }

    case CHANGE_DIFFICULTY_GAME: {
      return {
        ...state,
        difficultyGame: action.payload,
      };
    }

    case CHANGE_SKIRT_CARD: {
      return {
        ...state,
        skirtCard: action.payload,
      };
    }

    default: return state;
  }
}
