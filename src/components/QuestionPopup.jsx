// src/components/QuestionPopup.jsx
import React, { useState, useEffect, useContext } from "react";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { GameContext } from "../GameContext";
import { isCorrectAnswer } from "../utils/stringUtils";
import { playSound } from "../utils/soundManager";
import { CSSTransition } from "react-transition-group";
import "./QuestionPopup.css";

const QuestionPopup = ({ place, question, onQuestionDone }) => {
  const { answeredQuestions, answerQuestion, incrementScore } = useContext(GameContext);

  const [userAnswer, setUserAnswer] = useState("");
  const [errorCount, setErrorCount] = useState(0);
  const [questionDone, setQuestionDone] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [hintShown, setHintShown] = useState(false);

  useEffect(() => {
    setUserAnswer("");
    setErrorCount(0);
    setQuestionDone(false);
    setFeedbackMessage("");
    setHintShown(false);
  }, [question]);

  if (!question) return <p>No question for this location.</p>;

  const totalQuestions = place.questions.length;
  const currentIndex = place.questions.findIndex((q) => q.id === question.id);
  const uniqueId = `${place.id}-${question.id}`;
  const isAnswered = answeredQuestions.includes(uniqueId);
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const handleValidate = (provided) => {
    playSound("buttonClick");
    const answer = provided !== undefined ? provided : userAnswer;
    const correct = isCorrectAnswer(answer, question.reponses_acceptables);

    if (correct) {
      const points = errorCount === 0 ? 1 : 0.5;
      incrementScore(points);
      answerQuestion(uniqueId);
      setFeedbackMessage(
        <div style={{ display: "flex", alignItems: "center", color: "green", fontWeight: "bold" }}>
          <FaCheckCircle style={{ marginRight: "6px", fontSize: "1.2rem" }} />
          Correct answer!
        </div>
      );
      setQuestionDone(true);
      playSound("goodAnswer");
      onQuestionDone?.();
    } else {
      setErrorCount((e) => e + 1);
      playSound("wrongAnswer");

      if (errorCount === 0 && !hintShown) {
        setFeedbackMessage(
          <div style={{ display: "flex", flexDirection: "column", color: "#ff9800" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaInfoCircle style={{ marginRight: "6px", fontSize: "1.2rem" }} />
              Hint available!
            </div>
            <p style={{ marginLeft: "24px", color: "#555" }}>{question.indice}</p>
          </div>
        );
        setHintShown(true);
      } else if (errorCount === 1) {
        setFeedbackMessage("Second mistake: switch to multiple choice!");
      } else {
        setFeedbackMessage(
          `❌ Wrong answer. The correct answer was: ${question.bonne_reponse}`
        );
        answerQuestion(uniqueId);
        setQuestionDone(true);
        onQuestionDone?.();
      }
    }

    setUserAnswer("");
  };

  const handleNext = () => {
    playSound("buttonClick");
    onQuestionDone?.();
  };

  return (
    <div className="question-container">
      {/* Progress bar */}
      {totalQuestions > 1 && (
        <div style={{ marginBottom: "12px" }}>
          <div style={{ marginBottom: "4px", fontSize: "0.9rem" }}>
            Question {currentIndex + 1} of {totalQuestions}
          </div>
          <div
            style={{
              width: "100%",
              height: "8px",
              background: "#ddd",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "#2196f3",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>
      )}

      {/* The question text */}
      <p>{question.question}</p>

      {/* Answer input or multiple choice */}
      {(questionDone || isAnswered) ? (
        <div>
          <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "6px" }}>
            Question already answered.
          </p>
          <button className="btn btn-purple" onClick={handleNext}>
            Next question
          </button>
        </div>
      ) : (
        <>
          {errorCount < 2 && (
            <>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="bold-input"
                placeholder="Your answer"
              />
              <button className="btn btn-orange" onClick={() => handleValidate()}>
                Submit
              </button>
            </>
          )}
          {errorCount === 2 && (
            <>
              <p>
                <strong>Last chance (multiple choice):</strong>
              </p>
              {question.qcm.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleValidate(opt)}
                  className="btn btn-blue button-qcm"
                >
                  {opt}
                </button>
              ))}
            </>
          )}
        </>
      )}

      {/* Feedback message */}
      <CSSTransition in={!!feedbackMessage} timeout={300} classNames="feedback" unmountOnExit>
        <div className="feedback-message" style={{ marginTop: "10px" }}>
          {feedbackMessage}
        </div>
      </CSSTransition>
    </div>
  );
};

export default React.memo(
  QuestionPopup,
  (prev, next) => prev.place === next.place && prev.question === next.question
);