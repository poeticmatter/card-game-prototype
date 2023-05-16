import React from "react";
import Card from "./Card";
import Zone from "./Zone";
import "./Zone.css"; // Import the Zone CSS file

const HandZone = ({ zoneName, cards, onCardMove }) => {
  const handleCardMove = (cardId) => {
    onCardMove(cardId, zoneName);
  };

  return (
    <div>
      <h2 className="zone-title center-text">{zoneName}</h2>
      <Zone zoneName={zoneName} onCardMove={handleCardMove}>
        <div className="hand-zone">
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
    </div>
  );
};

export default HandZone;
