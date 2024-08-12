import React, { createContext, useState, ReactNode } from "react";

const ModalContext = createContext<any>(null);

interface ModalProviderProps {
  openModalId?: string;
  children: ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export { ModalContext, ModalProvider };
