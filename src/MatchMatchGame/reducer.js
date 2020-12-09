import { OPEN_CARD } from './actions';

const itialState = {
  card: [],
  openCard: false,
};

export function matchMatchGameReduser(state = itialState, action) {
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
