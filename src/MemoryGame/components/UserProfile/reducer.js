import { CHOOSE_DIFFICULTY_GAME, CHOOSE_SKIRT_CARD } from './actions';

const initialState = {
  difficultyGame: 'low',
  skirtCard: '',
  activeButton: [false, false, false],
};

export function UserProfileReducer(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_DIFFICULTY_GAME: {
      return {
        ...state,
        difficultyGame: action.payload,
        // columnsCount: action.payload === 'Low' ? 5 : action.payload === 'Medium' ? 6 : 8,
        // rowСount: action.payload === 'Low' ? 2 : 3,
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
