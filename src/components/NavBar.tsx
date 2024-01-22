import { useMemo, useCallback } from "react";
import { useAuth } from "../AuthContext.tsx";

const NavBar = () => {
  const { token, logout } = useAuth();

  // Check if logout is defined before using it
  const handleLogout = useCallback(() => {
    if (logout) {
      logout();
    }
  }, [logout]);

  // Memoize JSX using useMemo
  const navBarContent = useMemo(() => {
    return (
      <>
        <div className="w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
          <div>
            <h1 className="text-4xl font-bold">
              <a href="/">Dice&Tiles</a>
            </h1>
          </div>
          <ul className="gap-x-4 flex flex-row">
            <li>
              <a href="/gamelist">GamesList</a>
            </li>

            {token ? (
              <>
                <li>
                  <a href="/userlist">UserList</a>
                </li>
                <li>
                  <button onClick={handleLogout}>Log Out</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="/login">Log In</a>
                </li>
                <li>
                  <a href="/signup">Sign Up</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </>
    );
  }, [token, handleLogout]);

  return navBarContent;
};

export default NavBar;
