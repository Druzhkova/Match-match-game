import { OPEN_CARD } from './actions';

const initialState = {
  card: [],
  openCard: false,
  columnsCount: null,
  rowСount: null,
};

export function mainPageReduser(state = initialState, action) {
  switch (action.type) {
    case OPEN_CARD: {
      return {
        ...state,
        openCard: !state.openCard,
      };
    }

    default: return state;
  }
}
