import GameItem from './GameItem';

interface GameListProps {
  games: Array<{
    title: string;
    image: string;
    description: string;
  }>;
}

const GameList = ({ games }: GameListProps) => {
  return (
    <div className="border border-gray-300 rounded-md p-2 max-h-80 overflow-y-auto">
      {games.map((game, index) => (
        <div key={index} className="p-2">
          <GameItem {...game} />
        </div>
      ))}
    </div>
  );
};

export default GameList;