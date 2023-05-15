import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DiscardZone from "./components/DiscardZone";
import DeckZone from "./components/DeckZone";
import HandZone from "./components/HandZone";
import PlayZone from "./components/PlayZone";
import { findCard, removeCard } from "./utils/cardUtils";
import { parseCsv } from "./utils/csvParser";
import {
  drawCardFromDeck,
  handleShuffle,
  moveZoneToDeckAndShuffle,
  shuffleAllIntoDeck,
} from "./utils/cardActions";
import { parse } from "papaparse";

const App = () => {
  const [cards, setCards] = useState({
    Deck: [],
    Discard: [],
    Hand: [],
    Play: [],
  });

  useEffect(() => {
    loadCardData("/data/cards.csv");
  }, []);

  const loadCardData = async (csvFilePath) => {
    try {
      const data = await parseCsv(csvFilePath);
      const cardsWithIndex = data.map((card, index) => ({
        ...card,
        id: `card-${index + 1}`,
      }));

      const updatedCards = {
        Deck: cardsWithIndex, // Add all cards to the Deck zone
        Discard: [],
        Hand: [],
        Play: [],
      };

      setCards(updatedCards);
    } catch (error) {
      console.error("Error loading card data:", error);
    }
  };

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
      const movedCardWithNewZone = { ...movedCard };
      updatedCards[newZone].push(movedCardWithNewZone);

      return updatedCards;
    });
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const csvData = e.target.result;
      try {
        const parsedData = parse(csvData, { header: true }).data;
        console.log("parsedData", parsedData);
        const updatedCards = {
          Deck: parsedData, // Replace the Deck zone with the new data
          Discard: [],
          Hand: [],
          Play: [],
        };
        console.log("updated cards", updatedCards);
        setCards(updatedCards);
      } catch (error) {
        console.error("Error parsing CSV:", error);
      }
    };

    reader.onerror = (e) => {
      console.error("Error reading file:", e.target.error);
    };

    reader.readAsText(file);
  };

  const downloadTemplate = () => {
    const element = document.createElement("a");
    const templateURL = "/data/cards.csv";
    element.setAttribute("href", templateURL);
    element.setAttribute("download", "cards.csv");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="app">
      <div className="zones">
        <DndProvider backend={HTML5Backend}>
          <div className="zones-row">
            <PlayZone
              zoneName="Play"
              cards={cards.Play}
              onCardMove={handleCardMove}
            />
          </div>
          <div className="zones-row">
            <HandZone
              zoneName="Hand"
              cards={cards.Hand}
              onCardMove={handleCardMove}
            />
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
          <div className="button-container">
            <button onClick={() => drawCardFromDeck(setCards)}>
              Draw Card
            </button>
            <button onClick={() => handleShuffle("Deck", setCards)}>
              Shuffle Deck
            </button>
            <button
              onClick={() => moveZoneToDeckAndShuffle("Discard", setCards)}
            >
              Discard into Deck
            </button>
            <button onClick={() => shuffleAllIntoDeck(setCards)}>
              All into Deck
            </button>
            <button onClick={downloadTemplate}>Download Template</button>
            <input type="file" onChange={handleFileUpload} />
          </div>
        </DndProvider>
      </div>
    </div>
  );
};

export default App;
