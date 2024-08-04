import React from 'react';
import { useTranslation } from 'react-i18next';

import { share, world, settings } from 'assets/images/icons';

import './styles.scss';

export const AdvantagesContainer: React.FC = () => {
  const { t } = useTranslation('advantages');

  return (
    <section id="advantages">
      <div className="advantages__container">
        <div className="advantages__items">
          <div className="advantages__item">
            <div className="advantages__item-icon">
              <img src={share} alt="share-icon" />
            </div>
            <h3>
              {t('Share_your_vpn_connection_with_anyone_')}
            </h3>
            <span>
              {t('In_a_few_clicks_and_without_restrictions_')}
            </span>
          </div>
          <div className="advantages__item">
            <div className="advantages__item-icon">
              <img src={world} alt="world-icon" />
            </div>
            <h3>
              {t('Choose_which_websites_will_open_through_the_vpn_and_which_will_not_')}
            </h3>
            <span>
              {t('Split_tunneling_is_available_on_all_platforms_')}
            </span>
          </div>
          <div className="advantages__item">
            <div className="advantages__item-icon">
              <img src={settings} alt="settings-icon" />
            </div>
            <h3>
              {t('Import_connection_settings_for_wireguard_and_openvpn_')}
            </h3>
            <span>
              {t('For_simplified_setup_')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
