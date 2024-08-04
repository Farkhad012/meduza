import React from 'react';
import { useTranslation } from 'react-i18next';

import map from 'assets/images/map.png'

import './styles.scss';

export const LocationContainer: React.FC = () => {
  const { t } = useTranslation('location');

  return (
    <section id="location">
      <div className="location__container">
        <h2 className="location__title">
          <span>
            {t('Choose_the_location_')}
          </span>
          {t('Where_your_vpn_should_be_hosted_')}
        </h2>
        <img className="location__img" src={map} alt="" />
      </div>
    </section>
  )
}