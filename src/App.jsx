// src/App.jsx
import React, { useState, useContext } from "react";
import { TimeProvider, TimeContext } from "./TimeContext";
import { GameProvider, GameContext } from "./GameContext";
import { LocationProvider } from "./LocationContext";
import MapComponent from "./components/MapComponent";
import ScoreBoard from "./components/ScoreBoard";
import ScoreRanking from "./components/ScoreRanking";
import IntroVideo from "./components/IntroVideo";
import { saveScore } from "./utils/scoreUtils";
import "./styles/responsive.css";

function MainApp() {
  const { score, resetGame } = useContext(GameContext);
  const { time } = useContext(TimeContext);

  const [showIntro, setShowIntro] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [introKey, setIntroKey] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const handleEnterGame = () => {
    setIntroKey((prev) => prev + 1);
    setShowIntro(false);
  };

  const handleEndGame = () => {
    saveScore(score, time);
    setGameOver(true);
  };

  const handleEnableSoundAndGeo = () => {
    setIsMuted(false);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => console.log("Géolocalisation autorisée :", position.coords),
        (error) => console.log("Géolocalisation refusée ou indisponible :", error)
      );
    } else {
      console.log("La géolocalisation n’est pas supportée sur ce navigateur.");
    }
  };

  if (showIntro) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "black",
          zIndex: 1000,
          overflow: "hidden",
        }}
      >
        <IntroVideo
          key={introKey}
          isMuted={isMuted}
          onEnableSoundAndGeo={handleEnableSoundAndGeo}
          onEnterGame={handleEnterGame}
        />
      </div>
    );
  }

  if (gameOver) {
    return (
      <ScoreRanking
        onRestart={() => {
          resetGame();
          setShowIntro(true);
          setGameOver(false);
        }}
        onReturnToGame={() => setGameOver(false)}
      />
    );
  }

  return (
    <>
      {/* Afficher scoreboard et bouton Fin de partie uniquement si aucun popup n'est ouvert */}
      {!popupOpen && <ScoreBoard />}
      {!popupOpen && (
        <button onClick={handleEndGame} className="endgame-button">
          Finish Game

        </button>
      )}

      {/* Carte et popups */}
      <MapComponent onPopupToggle={setPopupOpen} />
    </>
  );
}

function App() {
  return (
    <TimeProvider>
      <GameProvider>
        <LocationProvider>
          <MainApp />
        </LocationProvider>
      </GameProvider>
    </TimeProvider>
  );
}

export default App;
