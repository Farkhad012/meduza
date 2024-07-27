import React from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router';

import { PathName } from 'constants/';

import './styles.scss';

export const Main: React.FC = () => {

  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <main className="main">
      <div className="container">
        <div className={`wrapper " ${currentPath === PathName.Home ? "landing" : "account"}`}>
          <Outlet />
        </div>
      </div>

    </main>
  )
}