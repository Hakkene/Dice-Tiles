import MinDescription from "./MinDescription";

interface GameItemProps {
  title: string;
  description: string;
  thumbnail_url: string;
}

const GameItem = ({ title, description, thumbnail_url }: GameItemProps) => {
  console.log("Dane w komponencie gameitem:", title);
  return (
    <div className="game-item border rounded-md p-2 flex items-center">
      <img
        src={thumbnail_url}
        alt="Game"
        className="w-32 h-32 rounded-md mr-4"
      />
      <div className="flex flex-col">
        <h3 className="text-base font-semibold mb-1">{title}</h3>
        <MinDescription text={description} maxLength={50} />
      </div>
    </div>
  );
};

export default GameItem;
