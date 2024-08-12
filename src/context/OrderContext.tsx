import React, { createContext, useState, ReactNode } from "react";

const OrderContext = createContext<any>(null);

interface OrderProviderProps {
  openModal?: string | null;
  children: ReactNode;
}

const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <OrderContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContext, OrderProvider };
