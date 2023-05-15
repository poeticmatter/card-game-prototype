export const drawCardFromDeck = (prevCards, setCards) => {
  const deckCards = prevCards.Deck;

  if (deckCards.length === 0) {
    return prevCards; // No cards in the deck
  }

  const topCard = deckCards[deckCards.length - 1];
  const updatedDeck = deckCards.slice(0, -1);
  const updatedHand = [...prevCards.Hand, topCard];

  const updatedCards = {
    ...prevCards,
    Deck: updatedDeck,
    Hand: updatedHand,
  };

  setCards(updatedCards);
};
export const handleShuffle = (zoneName, setCards, shuffleArray) => {
  setCards((prevCards) => {
    const zoneCards = prevCards[zoneName];
    const shuffledCards = shuffleArray(zoneCards);

    const updatedCards = { ...prevCards };
    updatedCards[zoneName] = shuffledCards;

    return updatedCards;
  });
};
