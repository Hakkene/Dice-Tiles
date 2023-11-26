import MinDescription from './MinDescription';

interface GameItemProps {
  title: string;
  description: string;
  image: string;
}

const GameItem = ({ title, description, image }: GameItemProps) => {
  return (
    <div className="game-item border rounded-md p-2 flex items-center">
      <img src={image} alt="Game" className="w-32 h-32 rounded-md mr-4" />
      <div className="flex flex-col">
        <h3 className="text-base font-semibold mb-1">{title}</h3>
        <MinDescription text={description} maxLength={50} />
      </div>
    </div>
  );
};

export default GameItem;