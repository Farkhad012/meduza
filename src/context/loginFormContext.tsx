import React, { createContext, useState, ReactNode } from "react";

const LoginFormContext = createContext<any>(null);

interface LoginFormProviderProps {
  children: ReactNode;
}

const LoginFormProvider: React.FC<LoginFormProviderProps> = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <LoginFormContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </LoginFormContext.Provider>
  );
}

export { LoginFormContext, LoginFormProvider };
