import { OPEN_CARD, GO_TO_MAIN_PAGE } from './actions';

const initialState = {
  card: [],
  openCard: false,
  loginPage: true,
};

export function mainPageReduser(state = initialState, action) {
  switch (action.type) {
    case OPEN_CARD: {
      return {
        ...state,
        openCard: !state.openCard,
      };
    }

    case GO_TO_MAIN_PAGE: {
      return {
        ...state,
        loginPage: !state.loginPage,
      };
    }

    default: return state;
  }
}
