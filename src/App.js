import React, { useState, useEffect } from 'react';
import Papa from 'papaparse'; // CSV parsing library
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DiscardZone from './components/DiscardZone';
import DeckZone from './components/DeckZone';
import HandZone from './components/HandZone';

const App = () => {
  const [cards, setCards] = useState([]); // State to store the loaded cards

  useEffect(() => {
    // Function to load card data from the CSV file
    const loadCardData = async () => {
      try {
        const response = await fetch('/data/cards.csv'); // Assuming the file is in the public folder
        const csvText = await response.text();

        // Parse the CSV text using PapaParse
        const { data } = Papa.parse(csvText, { header: true });

        // Generate unique card IDs and assign card index
        const cardsWithIndex = data.map((card, index) => ({
          ...card,
          id: `card-${index + 1}`,
        }));

        setCards(cardsWithIndex); // Update the cards state with the parsed data
      } catch (error) {
        console.error('Error loading card data:', error);
      }
    };

    loadCardData();
  }, []);

  const handleCardMove = (cardId, newZone) => {
    setCards((prevCards) => {
      // Find the card in the previous cards state
      const movedCard = prevCards.find((card) => card.id === cardId);
      if (!movedCard) {
        return prevCards; // Card not found, return the previous state
      }

      // Filter out the moved card from the previous cards
      const updatedCards = prevCards.filter((card) => card.id !== cardId);

      // Add the moved card to the new zone at the end
      const movedCardWithNewZone = { ...movedCard, zone: newZone };
      updatedCards.push(movedCardWithNewZone);

      return updatedCards;
    });
  };

  return (
    <div className="app">
      <h1>Card Game Prototype</h1>
      <div className="zones">
        <DndProvider backend={HTML5Backend}>
          <DeckZone
            zoneName="Deck"
            cards={cards}
            onCardMove={handleCardMove}
            cardDisplayType="faceDown"
          />
          <DiscardZone
            zoneName="Discard"
            cards={cards}
            onCardMove={handleCardMove}
            cardDisplayType="faceUp"
          />
          <HandZone
            zoneName="Hand"
            cards={cards}
            onCardMove={handleCardMove}
          />
        </DndProvider>
      </div>
    </div>
  );
};

export default App;
