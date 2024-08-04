import React from 'react';
import { useTranslation } from 'react-i18next';


import { Button, Logo } from 'components/';

import './styles.scss';

export const HeroContainer: React.FC = () => {
  const { t } = useTranslation('hero');

  return (
    <section id="hero">
      <div className="hero__container">
        <Logo />
        <h1 className="hero__title">
          {t('Create_your_')}
          <span>
            {t('Personal_vpn_')}
          </span>
          {t('In_a_few_clicks_')}
        </h1>
        <Button color="purple" text={t('Create_your_vpn_')} />
      </div>
    </section>
  )
}