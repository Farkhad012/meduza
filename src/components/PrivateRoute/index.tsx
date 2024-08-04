import React, { useContext, useEffect } from 'react';

import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import { PathName } from 'constants/';
import { AuthContext } from 'context/authContext';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(PathName.Home, { state: { showLoginModal: true } });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return <Navigate to={PathName.Home} state={{ from: location }} />;
  }

  return <>{children}</>;
};
