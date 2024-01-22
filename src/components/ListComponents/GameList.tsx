import { useMemo, useCallback } from "react";
import GameItem from "./GameItem";

interface GameListProps {
  games: Array<{
    title: string;
    thumbnail_url: string;
    description: string;
    slug: string;
  }>;
}

const GameList = ({ games }: GameListProps) => {
  console.log("Dane w komponencie gamelist:", games);

  // useMemo do memoizacji listy gier
  const memoizedGames = useMemo(() => games, [games]);

  // useCallback do memoizacji funkcji mapującej elementy listy
  const renderGameItems = useCallback(() => {
    return memoizedGames.map((game, index) => (
      <div key={index} className="p-2">
        <GameItem {...game} />
      </div>
    ));
  }, [memoizedGames]);

  return (
    <div className="border h-full border-gray-300 rounded-md p-2 overflow-y-auto">
      {renderGameItems()}
    </div>
  );
};

export default GameList;
