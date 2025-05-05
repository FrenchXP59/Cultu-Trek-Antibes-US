// src/components/IntroVideo.jsx
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./IntroVideo.css";

const IntroVideo = ({ isMuted, onEnableSoundAndGeo, onEnterGame }) => {
  // Si on est offline, on skip direct
  useEffect(() => {
    if (!navigator.onLine) {
      console.warn("[PWA] Pas de connexion : skip intro");
      onEnableSoundAndGeo();
      onEnterGame();
    }
  }, [onEnableSoundAndGeo, onEnterGame]);

  // URL YouTube
  const baseUrl = "https://www.youtube.com/embed/1731MS_RPOY";
  const params = [
    "autoplay=1",
    "controls=1",
    "playsinline=1",
    "modestbranding=1",
    "rel=0",
    isMuted ? "mute=1" : "",
  ]
    .filter(Boolean)
    .join("&");
  const url = `${baseUrl}?${params}`;

  return (
    <div className="intro-video-wrapper">
      <iframe
        src={url}
        title="Vidéo d'introduction"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        className="intro-video-iframe"
      />

      <div className="intro-buttons-container">
        <button
          onClick={onEnableSoundAndGeo}
          className="btn btn-turquoise button-intro-sound"
        >
          🎧 Enable Sound & Location

        </button>

        <button
          onClick={onEnterGame}
          className="btn btn-orange button-intro-play"
        >
          🎁 Enter Game

        </button>
      </div>
    </div>
  );
};

IntroVideo.propTypes = {
  isMuted: PropTypes.bool.isRequired,
  onEnableSoundAndGeo: PropTypes.func.isRequired,
  onEnterGame: PropTypes.func.isRequired,
};

export default IntroVideo;