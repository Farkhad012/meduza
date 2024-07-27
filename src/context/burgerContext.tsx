import React, { createContext, useState, ReactNode } from 'react';

interface BurgerContextProps {
  isBurgerOpen: boolean;
  setIsBurgerOpen: (isOpen: boolean) => void;
}

export const BurgerContext = createContext<BurgerContextProps>({
  isBurgerOpen: false,
  setIsBurgerOpen: () => {},
});

export const BurgerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  return (
    <BurgerContext.Provider value={{ isBurgerOpen, setIsBurgerOpen }}>
      {children}
    </BurgerContext.Provider>
  );
};
