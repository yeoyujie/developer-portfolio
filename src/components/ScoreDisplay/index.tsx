import { useState, useEffect } from "react";
import "./component.css";

interface ScoreDisplayProps {
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  onGameOver: () => void;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  timeLeft,
  setTimeLeft,
  score,
  onGameOver,
}) => {
  const timeLeftClass = timeLeft <= 10 ? "time-left-danger" : "";

  const [animate, setAnimate] = useState(true);
  const [prevScore, setPrevScore] = useState(0);

  // Set up timer
  useEffect(() => {
    if (timeLeft === 0) {
      onGameOver();
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft, setTimeLeft, onGameOver]);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => {
      setAnimate(false);
      setPrevScore(score);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [score]);

  const scoreDiff = score - prevScore;

  return (
    <>
      <div className="score-container">
        <div className="score-box">
          <span>Time left</span>
          <span className={`time-left ${timeLeftClass}`}>{timeLeft}</span>
        </div>
        <div className="score-box">
          <span>Score</span>
          <span className="score">{score}</span>
          {animate && (
            <span className={`large-score ${animate ? "animate" : ""}`}>
              {scoreDiff > 0 ? `+${scoreDiff}` : `${scoreDiff}`}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default ScoreDisplay;
