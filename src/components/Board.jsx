import React, { useEffect, useState } from "react";
import useStore from "../store";
import Card from "./Card";

const Board = () => {
  const cards = useStore((state) => state.cards);
  const generateCards = useStore((state) => state.generateCards);
  const [time, setTime] = useState(0);
  const [win, setWin] = useState(false);

  useEffect(() => {
    generateCards();
  }, []);

  // timer hook
  useEffect(() => {
    const timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // win hook
  useEffect(() => {
    if (
      cards.filter((card) => !card.hidden).length === cards.length &&
      cards.filter((card) => !card.hidden).length !== 0
    ) {
      setWin(true);
    }
  }, [cards]);

  const handleRestart = () => {
    generateCards();
    setTime(0);
    setWin(false);
  };
  return (
    <div className="board container p-4">
      {win ? (
        <h2 className="text-white fw-bold diplay1 win" onClick={handleRestart}>
          You Won! click here if you want to play again
        </h2>
      ) : (
        <div className="board-inner">
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="display-1 mb-5 text-white fw-bold">
              The Memory Game
            </h2>
            <h4 className="text-white">Time: {time}s</h4>
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            {cards.map((card) => (
              <Card key={card.order} card={card} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
