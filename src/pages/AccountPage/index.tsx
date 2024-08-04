import React from 'react';

import { SetPasswordContainer, NavMenuContainer, DashboardContainer } from 'containers/UserAccountContainers';

import './styles.scss';

export const AccountPage: React.FC = () => {
  return (
    <section className="account-page">
      <SetPasswordContainer />
      <div className="account-page__content">
        <NavMenuContainer />
        <DashboardContainer />        
      </div>
    </section>
  )
}