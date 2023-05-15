import React, { useState, useEffect } from 'react';
import Card from './Card';
import Zone from './Zone';
import './Zone.css'; // Import the Zone CSS file

const StackZone = ({ zoneName, cards, onCardMove, cardDisplayType }) => {
  const [stackCards, setStackCards] = useState([]);

  useEffect(() => {
    const filteredCards = cards.filter((card) => card.zone === zoneName);
    setStackCards(filteredCards);
  }, [cards, zoneName]);

  const topCard = stackCards.length > 0 ? stackCards[stackCards.length - 1] : null;

  return (
    <Zone zoneName={zoneName} cards={stackCards} onCardMove={onCardMove} cardDisplayType={cardDisplayType}>
      {topCard && (
        <Card
          key={topCard.id}
          card={topCard}
          isDeckZone={zoneName === 'Deck'}
          onCardMove={onCardMove}
          zoneName={zoneName}
          cardDisplayType={cardDisplayType}
        />
      )}
    </Zone>
  );
};

export default StackZone;
