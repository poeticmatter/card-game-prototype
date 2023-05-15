export const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const findCard = (cards, cardId) => {
  for (const zone in cards) {
    const card = cards[zone].find((card) => card.id === cardId);
    if (card) {
      return card;
    }
  }
  return null;
};

export const removeCard = (cards, cardId) => {
  const updatedCards = { ...cards };
  for (const zone in updatedCards) {
    updatedCards[zone] = updatedCards[zone].filter(
      (card) => card.id !== cardId
    );
  }
  return updatedCards;
};
