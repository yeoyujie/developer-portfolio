import "./component.css";

interface ScoreDisplayProps {
  timeLeft: number;
  score: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ timeLeft, score }) => {
  return (
    <>
      <div className="score-container">
        <div className="score-box">
          <span>Time left</span>
          <span>{timeLeft}</span>
        </div>
        <div className="score-box">
          <span>Score</span>
          <span>{score}</span>
        </div>
      </div>
    </>
  );
};

export default ScoreDisplay;
