import GameList from '../components/ListComponents/GameList';

const GameListScreen = () => {
  const userListData = {
    title: 'User List',
    games: [
      {
        title: 'Game 1',
        image: '/assets/mr2_AI_purple.jpg',
        description: 'Description of Game 1...',
      },
      {
        title: 'Game 2',
        image: '/assets/mr2_AI_purple.jpg',
        description: 'Description of Game 2...',
      },
      {
        title: 'Game 3',
        image: '/assets/mr2_AI_purple.jpg',
        description: 'Description of Game 3...',
      },
    ],
  };

  return (
    <div className="m-4 p-4">
      <h2>{userListData.title}</h2>
      <GameList games={userListData.games} />
    </div>
  );
};

export default GameListScreen;