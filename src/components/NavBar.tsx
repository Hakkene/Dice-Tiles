const NavBar = () => {
  return (
    <>
      <div className="w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
          <h1 className="text-4xl font-bold">Dice&Tiles</h1>
        </div>
        <ul className=" gap-x-4 flex flex-row">
          <li>
            <a href="/title">Games - titlescreen for now</a>
          </li>
          <li>
            <a href="/login">Log In</a>
          </li>
          <li>
            <a href="/signup">Sign Up</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
