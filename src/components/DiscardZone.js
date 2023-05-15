import React from 'react';
import Zone from './Zone';

const DiscardZone = ({ cards, onCardMove }) => {
  return <Zone zoneName="Discard" cards={cards} onCardMove={onCardMove} isFaceUp />;
};

export default DiscardZone;
