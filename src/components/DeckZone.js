import React from 'react';
import { useDrop } from 'react-dnd';
import Card from './Card';
import './Zone.css'; // Import the Zone CSS file

const DeckZone = ({ zoneName, cards, onCardMove, cardDisplayType }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (item) => onCardMove(item.id, zoneName),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const zoneCards = cards.filter((card) => card.zone === zoneName);
  const sortedCards = zoneCards.sort((a, b) => a.sortOrder - b.sortOrder);

  const handleCardMove = (cardId) => {
    onCardMove(cardId, zoneName);

    const nextCardIndex = sortedCards.findIndex((card) => card.id === cardId);
    const nextZoneCards = [...sortedCards];

    if (nextCardIndex > -1) {
      nextZoneCards.splice(nextCardIndex, 1);
    }

    if (nextZoneCards.length > 0) {
      const nextCard = nextZoneCards[nextZoneCards.length - 1];
      onCardMove(nextCard.id, zoneName);
    }
  };

  return (
    <div className="zone" ref={drop}>
      <h2 className="zone-title">{zoneName}</h2>
      <div className={`card-list ${isOver ? 'highlight' : ''}`}>
        {sortedCards.length > 0 && (
          <Card
            key={sortedCards[sortedCards.length - 1].id}
            card={sortedCards[sortedCards.length - 1]}
            isDeckZone={zoneName === 'Deck'}
            onCardMove={handleCardMove}
            zoneName={zoneName}
            cardDisplayType={cardDisplayType}
          />
        )}
      </div>
    </div>
  );
};

export default DeckZone;
