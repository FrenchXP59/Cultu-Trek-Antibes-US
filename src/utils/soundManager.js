// src/utils/soundManager.js
import { Howl } from "howler";

// Dictionnaire des sons à jouer
export const sounds = {
  goodAnswer: new Howl({
    src: ["/sounds/goodAnswer.mp3"],
    volume: 0.5,
  }),
  wrongAnswer: new Howl({
    src: ["/sounds/wrongAnswer.mp3"],
    volume: 0.5,
  }),
  buttonClick: new Howl({
    src: ["/sounds/buttonClick.mp3"],
    volume: 0.5,
  }),
  ding: new Howl({
    src: ["/sounds/ding.mp3"],
    volume: 0.5,
  }),
};

// Fonction utilitaire
export function playSound(soundKey) {
  if (sounds[soundKey]) {
    sounds[soundKey].play();
  } else {
    console.warn(`Le son "${soundKey}" n'existe pas.`);
  }
}
