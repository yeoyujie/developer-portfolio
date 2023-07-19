import gameOverImage from "@/assets/game-over.gif";
import Image from "next/image";

import "./component.css";
import "../../app/bttn.css";

interface GameOverScreenProps {
  score: number;
  onRetry: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ score, onRetry }) => {
  return (
    <div className="game-over-screen">
      <Image src={gameOverImage} alt="Game Over" width={500} height={400} />
      <p className="final-score">Your final score is: {score}</p>
      <button
        className="bttn-jelly bttn-lg bttn-default block-button"
        onClick={onRetry}
      >
        Retry
      </button>
    </div>
  );
};

export default GameOverScreen;
