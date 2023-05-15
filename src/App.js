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

        setCards(data); // Update the cards state with the parsed data
      } catch (error) {
        console.error('Error loading card data:', error);
      }
    };

    loadCardData();
  }, []);

  const handleCardMove = (cardId, newZone) => {
    setCards((prevCards) => {
      // Find the card in the previous cards state
      const updatedCards = prevCards.map((card) => {
        if (card.id === cardId) {
          // Update the card's zone
          return { ...card, zone: newZone };
        }
        return card;
      });

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
