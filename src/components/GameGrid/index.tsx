import "./module.css";

interface Game {
  title: string;
  thumbnailUrl: string;
}

interface GameGridProps {
  games: Game[];
}

const GameGrid: React.FC<GameGridProps> = ({ games }) => {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <div className="game-thumbnail" key={game.title}>
          <img src={game.thumbnailUrl} alt={game.title} />
          <div className="game-thumbnail-overlay">
            <div className="game-thumbnail-title">{game.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
