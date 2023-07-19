import gameOverImage from "@/assets/game-over.gif";
import Image from "next/image";
import "./component.css";

interface GameOverScreenProps {
  score: number;
  onRetry: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ score, onRetry }) => {
  return (
    <div className="game-over-screen">
      <Image src={gameOverImage} alt="Game Over" width={500} height={400} />
      <p className="score">Your final score is: {score}</p>
      <button className="retry-button" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
};

export default GameOverScreen;
