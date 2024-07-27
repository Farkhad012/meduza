import React, { ReactNode } from "react";
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from "./authContext";
import { LoginFormProvider } from "./loginFormContext";
import { BurgerProvider } from "./burgerContext";

interface MainProviderProps {
  children: ReactNode;
}

export const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  return (
    <BurgerProvider>
      <LoginFormProvider>
        <AuthProvider>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </AuthProvider>
      </LoginFormProvider>
    </BurgerProvider>
  )
}

