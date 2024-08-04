import React from "react";
import { Outlet } from "react-router-dom";

import './styles.scss'

export const DashboardContainer: React.FC = () => {

  return (
    <div className="dashboard">
      <Outlet />
    </div>
  )
}