import React from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';

export const FeaturesContainer: React.FC = () => {
  const { t } = useTranslation('features');

  return (
    <section id="features">
      <div className="features__container">
        <div className="features__content circle-bg">
          <ul className="features__content-items blur gradient-bg gradient-bg-top ">
            <li className="features__content-item">
              {t('Maximum_')}
              <br />
              {t('Level_')}
              <span>
                {t('Of_privacy_')}
              </span>
            </li>
            <li className="features__content-item">
              {t('High_')}
              <span>
                {t('Protection_')}
                <br />
                {t('From_blocks_')}
              </span>
            </li>
            <li className="features__content-item">
              <span>
              {t('High_speed_')}
                <br />
                {/* {t('')} */}
              </span>
              {t('More_than_24_')}
              <br />
              {t('Server_locations_')}
              <br />
              {t('Worldwide_')}
            </li>
            <li className="features__content-item">
            {t('Low_cost_')}
            </li>
          </ul>
          <div className="guarantee blur">
            <h5 className="guarantee__title">{t('Changed_your_mind_')}</h5>
            <p className="guarantee__text">
            {t('No_problem_')}
              <span>
              {t('Within_the_first_15_days_')}
              </span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}