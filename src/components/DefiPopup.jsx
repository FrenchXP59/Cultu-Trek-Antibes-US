// src/components/DefiPopup.jsx
import React, { useState, useContext } from "react";
import { GameContext } from "../GameContext";
import { playSound } from "../utils/soundManager";

const DefiPopup = React.memo(({ place }) => {
  const { completedChallenges, completeChallenge, incrementScore } = useContext(GameContext);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const isChallengeDone = completedChallenges.includes(place.id);

  const handleDefiComplete = () => {
    playSound("buttonClick");
    if (!isChallengeDone) {
      incrementScore(2);
      completeChallenge(place.id);
      setFeedbackMessage("✅ Défi complété, +2 points !");
      playSound("goodAnswer");
    } else {
      setFeedbackMessage("🔁 Défi déjà validé.");
    }
  };

  return (
    <div className="popup-defi-container" style={{ marginTop: "10px" }}>
      <p className="popup-defi">
        <strong>🎯 Défi :</strong> {place.defi}
      </p>

      <button
        className={`button-orange ${isChallengeDone ? "validated" : ""}`}
        onClick={handleDefiComplete}
        disabled={isChallengeDone}
      >
        {isChallengeDone ? "✅ Défi validé !" : "🚀 J'ai fait le défi"}
      </button>

      {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}
    </div>
  );
});

export default DefiPopup;
