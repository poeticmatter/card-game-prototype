import React from "react";
import StackZone from "./StackZone";

const DiscardZone = ({ zoneName, cards, onCardMove }) => {
  return (
    <div>
      <StackZone
        zoneName={zoneName}
        cards={cards}
        onCardMove={onCardMove}
        cardDisplayType="faceUp"
      />
    </div>
  );
};

export default DiscardZone;
