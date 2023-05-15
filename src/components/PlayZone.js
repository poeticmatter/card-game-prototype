import React from "react";
import Card from "./Card";
import Zone from "./Zone";
import "./Zone.css"; // Import the Zone CSS file

const PlayZone = ({ zoneName, cards, onCardMove }) => {
  const handleCardMove = (cardId) => {
    onCardMove(cardId, zoneName);
  };

  return (
    <Zone zoneName={zoneName} onCardMove={handleCardMove}>
      <div className="play-zone">
        {cards.map((card) => (
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

export default PlayZone;
