import React from 'react';
import { useLocation } from 'react-router-dom';

import { PathName } from 'constants/';

import { SetPasswordContainer, NavMenuContainer, DashboardContainer } from 'containers/UserAccountContainers';

import './styles.scss';

export const UserAccount: React.FC = () => {

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <section className="user-account">
      <SetPasswordContainer />
      <div className='user-account__content'>
        <NavMenuContainer />
        <DashboardContainer />
      </div>
    </section>
  )
}