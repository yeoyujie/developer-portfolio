import "./component.css";

interface GameOverScreenProps {
  score: number;
  onRetry: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ score, onRetry }) => {
  return (
    // <div className="game-over-screen">
    //   <p>Game Over</p>
    //   <p>Your final score is: {score}</p>
    //   <button onClick={onRetry}>Retry</button>
    // </div>
    <div className="glitch">404</div>
  );
};

export default GameOverScreen;
