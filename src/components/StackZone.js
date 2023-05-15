import React, { useState, useEffect } from "react";
import Card from "./Card";
import Zone from "./Zone";
import "./Zone.css"; // Import the Zone CSS file

const StackZone = ({ zoneName, cards, onCardMove, cardDisplayType }) => {
  const topCard = cards.length > 0 ? cards[cards.length - 1] : null;

  return (
    <Zone
      zoneName={zoneName}
      cards={cards}
      onCardMove={onCardMove}
      cardDisplayType={cardDisplayType}
    >
      {topCard && (
        <Card
          key={topCard.id}
          card={topCard}
          onCardMove={onCardMove}
          cardDisplayType={cardDisplayType}
        />
      )}
    </Zone>
  );
};

export default StackZone;
