import { shuffleArray } from "./cardUtils";

export const drawCardFromDeck = (setCards) => {
  setCards((prevCards) => {
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

    return updatedCards;
  });
};

export const handleShuffle = (zoneName, setCards) => {
  setCards((prevCards) => {
    const zoneCards = prevCards[zoneName];
    const shuffledCards = shuffleArray(zoneCards);

    const updatedCards = { ...prevCards };
    updatedCards[zoneName] = shuffledCards;

    return updatedCards;
  });
};

export const moveZoneToDeckAndShuffle = (zoneName, setCards) => {
  setCards((prevCards) => {
    const zoneCards = prevCards[zoneName];

    if (zoneCards.length === 0) {
      return prevCards; // No cards in the specified zone
    }

    const updatedDeck = [...prevCards.Deck, ...zoneCards];
    const shuffledDeck = shuffleArray(updatedDeck);

    const updatedCards = {
      ...prevCards,
      Deck: shuffledDeck,
      [zoneName]: [],
    };

    return updatedCards;
  });
};

export const shuffleAllIntoDeck = (setCards) => {
  moveZoneToDeckAndShuffle("Hand", setCards, shuffleArray);
  moveZoneToDeckAndShuffle("Discard", setCards, shuffleArray);
  moveZoneToDeckAndShuffle("Play", setCards, shuffleArray);

  // Add more zones if needed
};
