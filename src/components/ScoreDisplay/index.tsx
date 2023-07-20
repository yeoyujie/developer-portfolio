import { useState, useEffect, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import Info from "@mui/icons-material/Info";

import "./component.css";

interface ScoreDisplayProps {
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  onGameOver: () => void;
  onShowTipBox: () => void;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  timeLeft,
  setTimeLeft,
  score,
  onGameOver,
  onShowTipBox,
}) => {
  const timeLeftClass = timeLeft <= 10 ? "time-left-danger" : "";

  const timerIdRef = useRef<number | null>(null);

  const [animate, setAnimate] = useState(true);
  const [prevScore, setPrevScore] = useState(0);

  useEffect(() => {
    // Set up timer
    timerIdRef.current = window.setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    // Clean up timer
    return () => {
      if (timerIdRef.current !== null) {
        clearInterval(timerIdRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      onGameOver();
      return;
    }
  }, [timeLeft, onGameOver]);

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
        <IconButton
          onClick={onShowTipBox}
          sx={{
            color: "white", // Change the color of the IconButton
            "& .MuiSvgIcon-root": {
              fontSize: "3rem", // Change the size of the Info icon
            },
          }}
        >
          <Info />
        </IconButton>

        <div className="score-box">
          <span>Score</span>
          <span className="score">{score}</span>
        </div>
      </div>
    </>
  );
};

export default ScoreDisplay;
