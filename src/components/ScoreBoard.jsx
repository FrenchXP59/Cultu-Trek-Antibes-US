// src/components/ScoreBoard.jsx
import React, { useContext } from "react";
import { GameContext } from "../GameContext.jsx";
import { TimeContext } from "../TimeContext.jsx";
import { FaBicycle } from "react-icons/fa";

const ScoreBoard = () => {
  const { score, answeredQuestions } = useContext(GameContext);
  const { time } = useContext(TimeContext);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div
      className="scoreboard-container"
      style={{
        position: "fixed",
        top: "10px",
        left: "10px",
        backgroundColor: "rgba(250, 227, 217, 0.95)",
        color: "#333",
        fontFamily: "Roboto, sans-serif",
        padding: "10px 16px",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        zIndex: 9999,
      }}
    >
      <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: "bold", display: "flex", alignItems: "center" }}>
        <FaBicycle style={{ marginRight: "8px", color: "#e67e22" }} />
        Score : {score} point{score !== 1 ? "s" : ""}
      </h3>
      <p style={{ margin: "4px 0 0" }}>
        Time : {minutes}m {seconds}s
      </p>
      <p style={{ margin: "4px 0 0" }}>
        Questions answered : {answeredQuestions.length}
      </p>
    </div>
  );
};

export default ScoreBoard;