import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './authContext';
import { ModalProvider } from './ModalContext';
import { BurgerProvider } from './burgerContext';
import { NotificationProvider } from './notificationContext';
import { ParallaxProvider } from 'react-scroll-parallax';

interface MainProviderProps {
  children: ReactNode;
}

export const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <ParallaxProvider>
        <AuthProvider>
          <ModalProvider>
              <BurgerProvider>
                <NotificationProvider>
                  {children}
                </NotificationProvider>
              </BurgerProvider>
          </ModalProvider>
        </AuthProvider>
      </ParallaxProvider>
    </BrowserRouter>
  );
};
