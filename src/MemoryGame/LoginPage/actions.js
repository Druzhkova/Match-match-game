export const CHOOSE_DIFFICULTY_GAME = 'CHOOSE_DIFFICULTY_GAME';
export const CHOOSE_SKIRT_CARD = 'CHOOSE_SKIRT_CARD';

export function chooseDifficultyGame(difficultyGame) {
  return {
    type: CHOOSE_DIFFICULTY_GAME,
    payload: difficultyGame,
  };
}

export function chooseSkirtCard(SkirtCard) {
  return {
    type: CHOOSE_SKIRT_CARD,
    payload: SkirtCard,
  };
}
