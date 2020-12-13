import {
  AUTHORIZATION_SUCCESS, AUTHORIZATION_FAILURE, BOOTSTRAP_FINISH, LOGOUT,
} from './actions';

const initialState = {
  isAuthorized: false,
  userData: {},
  bootstraped: false,
};

export function authorizationReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHORIZATION_SUCCESS: {
      return {
        ...state,
        isAuthorized: true,
        userData: action.payload,
      };
    }

    case AUTHORIZATION_FAILURE: {
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
