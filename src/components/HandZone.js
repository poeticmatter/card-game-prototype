import React from 'react';
import Card from './Card';
import Zone from './Zone';
import './Zone.css'; // Import the Zone CSS file

const HandZone = ({ zoneName, cards, onCardMove }) => {
  const zoneCards = cards.filter((card) => card.zone === zoneName);

  const handleCardMove = (cardId) => {
    onCardMove(cardId, zoneName);
  };

  return (
    <Zone zoneName={zoneName} onCardMove={handleCardMove}>
      <div className="hand-zone">
        {zoneCards.map((card) => (
          <Card
            key={card.id}
            card={card}
            isDeckZone={false}
            onCardMove={handleCardMove}
            zoneName={zoneName}
            cardDisplayType="faceUp"
          />
        ))}
      </div>
    </Zone>
  );
};

export default HandZone;
