import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  RESULTS_SUCCESS,
  BOOTSTRAP_FINISH,
  LOGOUT,
  CHANGE_WIDTH_GAME_BOARD,
  CHANGE_SKIRT_CARD,
  CHANGE_STATUS_GAME,
} from './actions';

const initialState = {
  userData: {},
  statusGame: '',
  numberOfCardsPairs: 5,
  isAuthorized: false,
  bootstraped: false,
  widthGameBoard: 650,
  skirtCard: 0,
  playerResults: null,
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

    case RESULTS_SUCCESS: {
      return {
        ...state,
        playerResults: action.payload,
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

    case CHANGE_STATUS_GAME: {
      return {
        ...state,
        statusGame: action.payload,
      };
    }

    case CHANGE_WIDTH_GAME_BOARD: {
      return {
        ...state,
        widthGameBoard: action.payload,
        numberOfCardsPairs: action.payload === 650 ? 5 : action.payload === 780 ? 9 : 12,
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
