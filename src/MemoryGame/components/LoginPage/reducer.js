import {
  LOGIN_SUCCESS, LOGIN_FAILURE, BOOTSTRAP_FINISH, LOGOUT,
} from './actions';

const initialState = {
  isAuthorized: false,
  userData: {},
  bootstraped: false,
};

export function authorizationReducer(state = initialState, action) {
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

    default: return state;
  }
}
