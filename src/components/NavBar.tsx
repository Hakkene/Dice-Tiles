const NavBar = () => {
  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
          <h1>Dice&Tiles</h1>
        </div>
        <ul>
          <li>Games</li>
          <li>Log In</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
