import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DiscardZone from "./components/DiscardZone";
import DeckZone from "./components/DeckZone";
import HandZone from "./components/HandZone";
import { shuffleArray, findCard, removeCard } from "./utils/cardUtils";
import { parseCsv } from "./utils/csvParser";

const App = () => {
  const [cards, setCards] = useState({
    Deck: [],
    Discard: [],
    Hand: [],
  });

  useEffect(() => {
    const loadCardData = async () => {
      try {
        const data = await parseCsv("/data/cards.csv");
        const cardsWithIndex = data.map((card, index) => ({
          ...card,
          id: `card-${index + 1}`,
        }));

        const updatedCards = {
          Deck: [],
          Discard: [],
          Hand: [],
        };

        cardsWithIndex.forEach((card) => {
          if (updatedCards.hasOwnProperty(card.zone)) {
            updatedCards[card.zone].push(card);
          }
        });

        setCards(updatedCards);
      } catch (error) {
        console.error("Error loading card data:", error);
      }
    };
    loadCardData();
  }, []);

  const handleCardMove = (cardId, newZone) => {
    setCards((prevCards) => {
      // Find the card in the previous cards state
      const movedCard = findCard(prevCards, cardId);
      if (!movedCard) {
        return prevCards; // Card not found, return the previous state
      }

      // Filter out the moved card from the previous cards
      const updatedCards = removeCard(prevCards, cardId);

      // Add the moved card to the new zone at the end
      const movedCardWithNewZone = { ...movedCard, zone: newZone };
      updatedCards[newZone].push(movedCardWithNewZone);

      return updatedCards;
    });
  };
  const handleShuffle = (zoneName) => {
    setCards((prevCards) => {
      const zoneCards = prevCards[zoneName];
      const shuffledCards = shuffleArray(zoneCards);

      const updatedCards = { ...prevCards };
      updatedCards[zoneName] = shuffledCards;

      return updatedCards;
    });
  };
  return (
    <div className="app">
      <h1>Card Game Prototype</h1>
      <div className="zones">
        <DndProvider backend={HTML5Backend}>
          <div className="zones-row">
            <div className="hand-zone">
              <HandZone
                zoneName="Hand"
                cards={cards.Hand}
                onCardMove={handleCardMove}
              />
            </div>
            <div className="deck-discard-zone">
              <DeckZone
                zoneName="Deck"
                cards={cards.Deck}
                onCardMove={handleCardMove}
                cardDisplayType="faceDown"
              />
              <DiscardZone
                zoneName="Discard"
                cards={cards.Discard}
                onCardMove={handleCardMove}
                cardDisplayType="faceUp"
              />
            </div>
          </div>
          <div className="shuffle-button-container">
            <button onClick={() => handleShuffle("Deck")}>Shuffle Deck</button>
          </div>
        </DndProvider>
      </div>
    </div>
  );
};

export default App;
