// src/components/ResultsPage.jsx
import React, { useContext } from "react";
import { GameContext } from "../GameContext.jsx";
const ResultsPage = () => {
  const { score, time, resetGame } = useContext(GameContext);

  return (
    <div>
      <h2>Game Results</h2>
      <p>Final Score : {score}</p>
      <p>Total Time : {time} secondes</p>
      <button onClick={resetGame}>Rejouer</button>
    </div>
  );
};

export default ResultsPage;
