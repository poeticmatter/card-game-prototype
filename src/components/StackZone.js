import React, { useState, useEffect } from "react";
import Card from "./Card";
import Zone from "./Zone";
import "./Zone.css"; // Import the Zone CSS file

const StackZone = ({ zoneName, cards, onCardMove, cardDisplayType }) => {
  const topCard = cards.length > 0 ? cards[cards.length - 1] : null;
  const cardCount = cards.length;

  return (
    <div>
      <h2 className="zone-title center-text">
        {zoneName} ({cardCount})
      </h2>
      <Zone
        zoneName={zoneName}
        cards={cards}
        onCardMove={onCardMove}
        cardDisplayType={cardDisplayType}
      >
        <div className="single-card-zone">
          {topCard && (
            <Card
              key={topCard.id}
              card={topCard}
              onCardMove={onCardMove}
              cardDisplayType={cardDisplayType}
            />
          )}
        </div>
      </Zone>
    </div>
  );
};

export default StackZone;
