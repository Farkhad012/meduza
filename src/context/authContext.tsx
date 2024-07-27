import React, { createContext, useState, ReactNode } from "react";

const AuthContext = createContext<any>(null);

interface LoginFormProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<LoginFormProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };