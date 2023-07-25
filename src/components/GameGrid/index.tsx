import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";

import "./module.css";

interface Game {
  title: string;
  thumbnailSrc?: StaticImageData;
  animationData?: any;
  href: string;
}

interface GameGridProps {
  games: Game[];
}

const GameGrid: React.FC<GameGridProps> = ({ games }) => {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <div className="game-thumbnail" key={game.title}>
          <Link href={game.href} passHref>
            {game.thumbnailSrc ? (
              <Image src={game.thumbnailSrc} alt={game.title} />
            ) : (
              <Lottie
                animationData={game.animationData}
                loop
                style={{ width: "100%", height: "100%" }}
              />
            )}
            <div className="game-thumbnail-overlay">
              <div className="game-thumbnail-title">{game.title}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
