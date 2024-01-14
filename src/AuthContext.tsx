import { createContext, useContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  logout?: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  const logout = () => {
    setToken(null);
    navigate("/");
  };

  console.log("Token value:", token);

  return (
    <AuthContext.Provider value={{ token, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
