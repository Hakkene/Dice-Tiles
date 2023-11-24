interface GameItemLargeProps {
    title: string;
    description: string;
    image: string;
  }
  
  const GameItemLarge = ({ title, description, image }: GameItemLargeProps) => {
    return (
      <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <div className="flex items-center">
          <img src={image} alt={title} className="w-400 h-400 rounded-lg mr-8" />
          <div>
            <h2 className="text-3xl font-semibold mb-4">{title}</h2>
            <p className="text-base">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default GameItemLarge;