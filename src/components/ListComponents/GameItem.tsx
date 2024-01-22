import React, { useMemo } from "react";
import MinDescription from "./MinDescription";
import { Link } from "react-router-dom";

interface GameItemProps {
  title: string;
  description: string;
  thumbnail_url: string;
  slug: string;
}

const GameItem: React.FC<GameItemProps> = ({
  title,
  description,
  thumbnail_url,
  slug,
}) => {
  console.log("Dane w komponencie gameitem:", title);

  // Użyj useMemo do memoizacji funkcji Link
  const MemoizedLink = useMemo(() => React.memo(Link), []);

  return (
    <div className="game-item border rounded-md p-2 flex items-center">
      {/* Użyj memoizowanej funkcji Link */}
      <MemoizedLink to={`/title/${encodeURIComponent(slug)}`}>
        <img
          src={thumbnail_url}
          alt="Game"
          className="w-32 h-32 rounded-md mr-4"
        />
      </MemoizedLink>
      <div className="flex flex-col">
        <h3 className="text-base font-semibold mb-1">{title}</h3>
        <MinDescription text={description} maxLength={50} />
      </div>
    </div>
  );
};

export default GameItem;
