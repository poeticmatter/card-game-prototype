import React from 'react';
import Zone from './Zone';

const HandZone = ({ cards, onCardMove }) => {
  return <Zone zoneName="Hand" cards={cards} onCardMove={onCardMove} isFaceUp />;
};

export default HandZone;
