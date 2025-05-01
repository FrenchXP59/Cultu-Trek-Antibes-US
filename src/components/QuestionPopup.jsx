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
  const [indiceDisplayed, setIndiceDisplayed] = useState(false);

  useEffect(() => {
    setUserAnswer("");
    setErrorCount(0);
    setQuestionDone(false);
    setFeedbackMessage("");
    setIndiceDisplayed(false);
  }, [question]);

  if (!question) return <p>Aucune question pour ce lieu.</p>;

  const totalQuestions = place.questions.length;
  const currentIndex = place.questions.findIndex((q) => q.id === question.id);
  const uniqueQuestionId = `${place.id}-${question.id}`;
  const isAnswered = answeredQuestions.includes(uniqueQuestionId);
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const handleValidate = (providedAnswer) => {
    playSound("buttonClick");
    const answerToCheck = providedAnswer !== undefined ? providedAnswer : userAnswer;
    const correct = isCorrectAnswer(answerToCheck, question.reponses_acceptables);

    if (correct) {
      const pointsToAdd = errorCount === 0 ? 1 : 0.5;
      incrementScore(pointsToAdd);
      answerQuestion(uniqueQuestionId);
      setFeedbackMessage(
        <div style={{ display: "flex", alignItems: "center", color: "green", fontWeight: "bold" }}>
          <FaCheckCircle style={{ marginRight: "6px", fontSize: "1.2rem" }} />
          Bonne réponse !
        </div>
      );
      setQuestionDone(true);
      playSound("goodAnswer");
      onQuestionDone?.();
    } else {
      setErrorCount((prev) => prev + 1);
      if (errorCount === 0 && !indiceDisplayed) {
        setFeedbackMessage(
          <div style={{ display: "flex", flexDirection: "column", color: "#ff9800" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaInfoCircle style={{ marginRight: "6px", fontSize: "1.2rem" }} />
              Indice disponible !
            </div>
            <p style={{ marginLeft: "24px", color: "#555" }}>{question.indice}</p>
          </div>
        );
        setIndiceDisplayed(true);
      } else if (errorCount === 1) {
        setFeedbackMessage("2ème erreur : passage au QCM !");
      } else {
        setFeedbackMessage(`❌ Mauvaise réponse. La bonne réponse était : ${question.bonne_reponse}`);
        answerQuestion(uniqueQuestionId);
        setQuestionDone(true);
        onQuestionDone?.();
      }
      playSound("wrongAnswer");
    }

    setUserAnswer("");
  };

  const handleNextQuestion = () => {
    playSound("buttonClick");
    onQuestionDone?.();
  };

  return (
    <div className="question-container">
      {/* Barre de progression */}
      {totalQuestions > 1 && (
        <div style={{ marginBottom: "12px" }}>
          <div style={{ marginBottom: "4px", fontSize: "0.9rem" }}>
            Question {currentIndex + 1} sur {totalQuestions}
          </div>
          <div style={{ width: "100%", height: "8px", background: "#ddd", borderRadius: "4px", overflow: "hidden" }}>
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "#2196f3",
                transition: "width 0.3s ease"
              }}
            />
          </div>
        </div>
      )}

      {/* Question */}
      <p>{question.question}</p>

      {/* Réponse ou QCM */}
      {(questionDone || isAnswered) ? (
        <div>
          <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "6px" }}>
            Question déjà répondue.
          </p>
          <button className="btn btn-purple" onClick={handleNextQuestion}>
            Question suivante
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
              />
              <button className="btn btn-orange" onClick={() => handleValidate()}>
                Valider
              </button>
            </>
          )}
          {errorCount === 2 && (
            <>
              <p>
                <strong>Dernière chance (QCM) :</strong>
              </p>
              {question.qcm.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleValidate(option)}
                  className="btn btn-blue button-qcm"
                >
                  {option}
                </button>
              ))}
            </>
          )}
        </>
      )}

      {/* Feedback */}
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
  (prevProps, nextProps) =>
    prevProps.place === nextProps.place && prevProps.question === nextProps.question
);
