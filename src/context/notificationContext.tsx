import React, { createContext, useContext, useState, ReactNode } from "react";

interface NotificationContextType {
  notification: string | null;
  setNotification: (message: string | null) => void;
  clearNotification: () => void;
}

interface NotificationProviderProps {
  children: ReactNode;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notification, setNotification] = useState<string | null>(null);

  const clearNotification = () => {
    setNotification(null);
  }

  return (
    <NotificationContext.Provider value={{ notification, setNotification, clearNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};