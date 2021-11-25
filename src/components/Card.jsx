import React from "react";
import cardBack from "../assets/card-back.svg";
import useStore from "../store";

const Card = ({ card }) => {
  const showCard = useStore((state) => state.showCard);
  const clicks = useStore((state) => state.clicks);

  const handleClick = () => {
    showCard(card, clicks);
  };

  return (
    <div className={`col-md-4 mb-5 order-${card.order}`}>
      <div className="game-card" onClick={handleClick}>
        {card.hidden ? (
          <div className="card-back">
            <img alt="card-back" src={cardBack} />
          </div>
        ) : (
          <div className="card-front">
            <div className={`card-shape ${card.shape}`}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
