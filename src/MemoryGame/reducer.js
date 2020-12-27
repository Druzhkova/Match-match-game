import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  BOOTSTRAP_FINISH,
  LOGOUT,
  CHANGE_WIDTH_GAME_BOARD,
  CHANGE_SKIRT_CARD,
  OPEN_CARD,
  DONE_CARD,
  DELETE_CARD,
  CHANGE_STATUS_GAME,
  CHANGE_STATUS_CARD,
} from './actions';

const initialState = {
  userData: {},
  statusGame: '',
  numberOfCardsPairs: 5,
  isAuthorized: false,
  bootstraped: false,
  widthGameBoard: 650,
  skirtCard: 0,
  cardStatus: {
    open: false,
    done: false,
  },
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

    case CHANGE_STATUS_CARD: {
      return {
        ...state,
        statusGame: action.payload,
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

    case OPEN_CARD: {
      return {
        ...state,
        cardStatus: {
          ...state.cardStatus,
          open: action.payload,
        },
      };
    }

    case DONE_CARD: {
      return {
        ...state,
        cardStatus: {
          ...state.cardStatus,
          done: action.payload,
        },
      };
    }

    case DELETE_CARD: {
      return {
        ...state,
        gameCards: state.gameCards.filter((card) => card.id !== action.payload),
      };
    }

    default: return state;
  }
}
