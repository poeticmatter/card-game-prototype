import React, { useState, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import Card from "./Card";
import Zone from "./Zone";
import "./Zone.css"; // Import the Zone CSS file

const PlayZone = ({ zoneName, cards, onCardMove }) => {
  const [cardPositions, setCardPositions] = useState([]);

  const handleCardMove = (cardId, newZone) => {
    onCardMove(cardId, newZone);
  };

  const handleDrop = (cardId, x, y) => {
    cardPositions[cardId] = { x, y };
    setCardPositions(cardPositions);
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { cardId: null, zone: zoneName }, // Placeholder for cardId
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset) {
        const x = offset.x;
        const y = offset.y;
        handleDrop(item.id, x, y);
      }
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  }));

  const isActive = canDrop && isOver;

  return (
    <Zone zoneName={zoneName} onCardMove={handleCardMove}>
      <div ref={drop} className={`play-zone ${isActive ? "active" : ""}`}>
        {cards.map((card) => {
          const cardPosition = cardPositions[card.id];
          return (
            <div
              key={card.id}
              ref={(element) => drag(element, { cardId: card.id })}
              style={{
                opacity: isDragging ? 0.5 : 1,
                position: "absolute",
                left: cardPosition ? cardPosition.x : 0,
                top: cardPosition ? cardPosition.y : 0,
              }}
            >
              <Card
                card={card}
                isDeckZone={false}
                onCardMove={handleCardMove}
                onDrop={handleDrop}
                zoneName={zoneName}
                cardDisplayType="faceUp"
              />
            </div>
          );
        })}
      </div>
    </Zone>
  );
};

export default PlayZone;
