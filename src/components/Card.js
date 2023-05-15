import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import './Card.css'; // Import the Card CSS file

const Card = ({ card, cardDisplayType }) => {
  const [isFaceUp, setIsFaceUp] = useState(
    cardDisplayType === 'faceUp' || cardDisplayType === 'both'
  );

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'card',
    item: { id: card.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const handleClick = () => {
    if (cardDisplayType === 'both') {
      setIsFaceUp(!isFaceUp);
    }
  };

  return (
    <div
      className={`card ${isFaceUp ? '' : 'card-back'}`}
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onClick={handleClick}
    >
      <h3>{isFaceUp ? card.cardName : ''}</h3>
      <p>{isFaceUp ? `Type: ${card.cardType}` : ''}</p>
    </div>
  );
};

export default Card;
