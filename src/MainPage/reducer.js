import { OPEN_CARD } from './actions';

const initialState = {
  card: [],
  openCard: false,
};

export function mainPageReduser(state = initialState, action) {
  switch (action.type) {
    case OPEN_CARD: {
      return {
        ...state,
        openCard: true,
      };
    }

    default: return state;
  }
}
