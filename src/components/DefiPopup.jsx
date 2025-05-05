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
      setFeedbackMessage("✅ Challenge completed! +2 points");
      playSound("goodAnswer");
    } else {
      setFeedbackMessage("🔁 Challenge already completed");
    }
  };

  return (
    <div className="popup-defi-container" style={{ marginTop: "10px" }}>
      <p className="popup-defi">
        <strong>🎯 Challenge:</strong> {place.defi}
      </p>

      <button
        className={`btn btn-turquoise ${isChallengeDone ? "validated" : ""}`}
        onClick={handleDefiComplete}
        disabled={isChallengeDone}
        style={{ marginRight: "8px", marginBottom: "8px" }}
      >
        {isChallengeDone ? "✅ Completed!" : "🚀 I’ve completed it"}
      </button>

      {feedbackMessage && (
        <p className="feedback-message" style={{ marginTop: "8px" }}>
          {feedbackMessage}
        </p>
      )}
    </div>
  );
});

export default DefiPopup;