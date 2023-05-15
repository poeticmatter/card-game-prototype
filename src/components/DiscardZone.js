import React from 'react';
import StackZone from './StackZone';

const DiscardZone = ({ zoneName, cards, onCardMove }) => {
  return (
    <StackZone
      zoneName={zoneName}
      cards={cards}
      onCardMove={onCardMove}
      cardDisplayType="faceUp"
    />
  );
};

export default DiscardZone;
