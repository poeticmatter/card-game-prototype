import React from 'react';
import StackZone from './StackZone';

const DeckZone = ({ zoneName, cards, onCardMove }) => {
  return (
    <StackZone
      zoneName={zoneName}
      cards={cards}
      onCardMove={onCardMove}
      cardDisplayType="faceUp"
    />
  );
};

export default DeckZone;
