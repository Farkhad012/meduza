import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation, } from 'react-router-dom';
import { LoginFormContext } from 'context/loginFormContext';

import { PathName } from 'constants/';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated, setOpenModal } = useContext(LoginFormContext);
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setOpenModal(true);
    }
  }, [isAuthenticated, setOpenModal]);

  if (!isAuthenticated) {
    return <Navigate to={PathName.Home} state={{ from: location }} />;
  }

  return <>{children}</>;
};
