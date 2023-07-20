import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import "./module.css";

interface Game {
  title: string;
  thumbnailSrc: StaticImageData;
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
            <Image src={game.thumbnailSrc} alt={game.title} />
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
