import React from "react";
import StackZone from "./StackZone";

const DeckZone = ({ zoneName, cards, onCardMove, onShuffle }) => {
  return (
    <div>
      <StackZone
        zoneName={zoneName}
        cards={cards}
        onCardMove={onCardMove}
        cardDisplayType="faceDown"
      />
    </div>
  );
};

export default DeckZone;
