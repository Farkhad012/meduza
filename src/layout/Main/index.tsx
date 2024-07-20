import React from 'react';
import { Outlet } from 'react-router';

import './styles.scss';

export const Main: React.FC = () => {
  return (
    <main className="main">
      <Outlet />
    </main>
  )
}