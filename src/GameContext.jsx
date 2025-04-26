// src/GameContext.jsx
import React, { createContext, useReducer } from "react";

// Shape of the game state
const initialState = {
  score: 0,
  answeredQuestions: [],
  completedChallenges: [],
  shouldRecenter: false,
};

// Actions available
const ACTIONS = {
  ANSWER_QUESTION: "ANSWER_QUESTION",
  COMPLETE_CHALLENGE: "COMPLETE_CHALLENGE",
  INCREMENT_SCORE: "INCREMENT_SCORE",
  SET_RECENTER: "SET_RECENTER",
  RESET_GAME: "RESET_GAME",
};

// Reducer to manage game state
function gameReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ANSWER_QUESTION:
      return {
        ...state,
        answeredQuestions: [...state.answeredQuestions, action.payload],
      };

    case ACTIONS.COMPLETE_CHALLENGE:
      return {
        ...state,
        completedChallenges: [...state.completedChallenges, action.payload],
      };

    case ACTIONS.INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + action.payload,
      };

    case ACTIONS.SET_RECENTER:
      return {
        ...state,
        shouldRecenter: action.payload,
      };

    case ACTIONS.RESET_GAME:
      return { ...initialState };

    default:
      return state;
  }
}

// Create context
export const GameContext = createContext();

// Provider component
export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  // Action dispatchers
  const answerQuestion = (questionId) =>
    dispatch({ type: ACTIONS.ANSWER_QUESTION, payload: questionId });
  const completeChallenge = (placeId) =>
    dispatch({ type: ACTIONS.COMPLETE_CHALLENGE, payload: placeId });
  const incrementScore = (points) =>
    dispatch({ type: ACTIONS.INCREMENT_SCORE, payload: points });
  const setRecenter = (value) =>
    dispatch({ type: ACTIONS.SET_RECENTER, payload: value });
  const resetGame = () =>
    dispatch({ type: ACTIONS.RESET_GAME });

  return (
    <GameContext.Provider
      value={{
        // state
        score: state.score,
        answeredQuestions: state.answeredQuestions,
        completedChallenges: state.completedChallenges,
        shouldRecenter: state.shouldRecenter,
        // actions
        answerQuestion,
        completeChallenge,
        incrementScore,
        setRecenter,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
