import React from "react";

import { Outlet } from "react-router";

import './styles.scss';

const Main: React.FC = () => {
  return (
    <main className="main">
      <Outlet />
    </main>

  )
}

export { Main };