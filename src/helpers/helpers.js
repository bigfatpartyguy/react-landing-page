export const addSelectedField = cardsArr =>
  cardsArr.map(card => ({...card, selected: false}));
