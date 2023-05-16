import React from "react";
import { useDrop } from "react-dnd";

const Zone = ({ zoneName, onCardMove, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => onCardMove(item.id, zoneName),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop}>
      <div className={`card-list ${isOver ? "highlight" : ""}`}>{children}</div>
    </div>
  );
};

export default Zone;
