import React from 'react';
import { useDrag } from 'react-dnd';
import './Card.css'; // Import the Card CSS file

const Card = ({ card, isDeckZone }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: isDeckZone ? 'deck-card' : 'card',
    item: { id: card.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      className={`card ${isDeckZone ? 'card-back' : ''}`}
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <h3>{isDeckZone ? '' : card.cardName}</h3>
      <p>{isDeckZone ? '' : `Type: ${card.cardType}`}</p>
    </div>
  );
};

export default Card;
