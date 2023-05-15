import React from 'react';
import { useDrop } from 'react-dnd';
import Card from './Card';
import './Zone.css'; // Import the Zone CSS file

const Zone = ({ zoneName, cards, onCardMove, cardDisplayType }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (item) => onCardMove(item.id, zoneName),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const zoneCards = cards.filter((card) => card.zone === zoneName);

  const handleCardMove = (cardId) => {
    onCardMove(cardId, zoneName);
  };

  return (
    <div className="zone" ref={drop}>
      <h2 className="zone-title">{zoneName}</h2>
      <div className={`card-list ${isOver ? 'highlight' : ''}`}>
        {zoneCards.map((card) => (
          <Card
            key={card.id}
            card={card}
            isDeckZone={false}
            onCardMove={handleCardMove}
            zoneName={zoneName}
            cardDisplayType={cardDisplayType}
          />
        ))}
      </div>
    </div>
  );
};

export default Zone;
