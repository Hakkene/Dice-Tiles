import GameList from '../components/ListComponents/GameList';
import GameItem from '../components/ListComponents/GameItem';
import MinDescription from '../components/ListComponents/MinDescription';


const MainScreen = () => {
  const images = [
    "/assets/mr2_AI_purple.jpg",
    "/assets/mr2_AI_red.png",
    "/assets/ionia.jpg",
    "/assets/mr2_AI_purple.jpg",
    "/assets/mr2_AI_red.png",
    "/assets/ionia.jpg",
    "/assets/mr2_AI_purple.jpg",
    "/assets/mr2_AI_red.png",
  ];

  const whatsNewGames = [
    // Array of GameItemProps for 'What's new?'
    {
      title: 'Game 1',
      image: '/assets/mr2_AI_purple.jpg',
      description: 'Description of Game 1...',
    },
    {
      title: 'Game 1',
      image: '/assets/mr2_AI_purple.jpg',
      description: 'Description of Game 1...',
    },
    {
        title: 'Game 1',
        image: '/assets/mr2_AI_purple.jpg',
        description: 'Description of Game 1...',
      },
      {
        title: 'Game 1',
        image: '/assets/mr2_AI_purple.jpg',
        description: 'Description of Game 1...',
      },
      {
        title: 'Game 1',
        image: '/assets/mr2_AI_purple.jpg',
        description: 'Description of Game 1...',
      },
      {
        title: 'Game 1',
        image: '/assets/mr2_AI_purple.jpg',
        description: 'Description of Game 1...',
      },
  ];

  const topForWeekGames = [
    // Array of GameItemProps for 'Top for this week'
    {
      title: 'Game 1',
      image: '/assets/mr2_AI_red.png',
      description: 'Description of Game 2...',
    },
    {
        title: 'Game 1',
        image: '/assets/mr2_AI_purple.jpg',
        description: 'Description of Game 1...',
      },
      {
        title: 'Game 1',
        image: '/assets/mr2_AI_purple.jpg',
        description: 'Description of Game 1...',
      },
      {
        title: 'Game 1',
        image: '/assets/mr2_AI_purple.jpg',
        description: 'Description of Game 1...',
      },
      {
        title: 'Game 1',
        image: '/assets/mr2_AI_purple.jpg',
        description: 'Description of Game 1...',
      },
      {
        title: 'Game 1',
        image: '/assets/mr2_AI_purple.jpg',
        description: 'Description of Game 1...',
      },
      {
        title: 'Game 1',
        image: '/assets/mr2_AI_purple.jpg',
        description: 'Description of Game 1...',
      },
  ];

  const randomGame = {
    // Single GameItemProps for random game
    title: 'Random Game',
    image: 'path-to-random-image.jpg',
    description: 'Description of the random game...',
  };

  return (
    <div className="flex">
      <div className="w-1/2 h-96 m-2">
        <h2>What's new?</h2>
        <GameList games={whatsNewGames} />
      </div>
      <div className="w-1/2 h-96 m-2">
        <h2>Top for this week</h2>
        <GameList games={topForWeekGames} />
      </div>
    </div>
  );
};

export default MainScreen;