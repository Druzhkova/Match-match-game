import { CHOOSE_DIFFICULTY_GAME, CHOOSE_SKIRT_CARD } from './actions';

const initialState = {
  difficultyGame: '',
  skirtCard: '',
};

export function UserProfileReducer(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_DIFFICULTY_GAME: {
      return {
        ...state,
        difficultyGame: action.payload,
      };
    }

    case CHOOSE_SKIRT_CARD: {
      return {
        ...state,
        skirtCard: action.payload,
      };
    }

    default: return state;
  }
}
