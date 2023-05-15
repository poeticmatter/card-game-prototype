import React, { useState, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import Card from "./Card";
import Zone from "./Zone";
import "./Zone.css"; // Import the Zone CSS file

const PlayZone = ({ zoneName, cards, onCardMove }) => {
  const [cardPositions, setCardPositions] = useState(new Map());

  useEffect(() => {
    console.log("cardPositions:", cardPositions);
  }, [cardPositions]);

  const handleCardMove = (cardId, newZone) => {
    onCardMove(cardId, newZone);
  };

  const handleDrag = (cardId) => {
    const updatedCardPositions = new Map(cardPositions);
    updatedCardPositions.delete(cardId);
    setCardPositions(updatedCardPositions);
  };

  const handleDrop = (cardId, x, y) => {
    console.log("Drop coordinates:", x, y);
    console.log("cardPositions (before update):", cardPositions);

    const updatedCardPositions = {
      ...cardPositions,
      [cardId]: { x, y },
    };

    console.log("updatedCardPositions:", updatedCardPositions);

    setCardPositions(updatedCardPositions);

    console.log("cardPositions (after update):", cardPositions);
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
          console.log("cardPosition(s) in render:", cardPositions);
          console.log("card.id in render:", card.id);
          const cardPosition = cardPositions[card.id];
          console.log("cardPosition in render:", cardPosition);

          if (cardPosition) {
            console.log("Card coordinates:", cardPosition.x, cardPosition.y);
          }

          console.log("Card ID:", card.id);

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
                onDrag={handleDrag}
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
