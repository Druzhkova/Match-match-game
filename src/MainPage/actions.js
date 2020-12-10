export const OPEN_CARD = 'OPEN_CARD';
export const GO_TO_MAIN_PAGE = 'GO_TO_MAIN_PAGE';

export function openCard() {
  return {
    type: OPEN_CARD,
  };
}

export function goToMainPage() {
  return {
    type: GO_TO_MAIN_PAGE,
  };
}
