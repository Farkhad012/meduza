import React from 'react';
import { useTranslation } from 'react-i18next';

import { NavLink } from 'react-router-dom';

import { lockout, popular, amneziaWG, overCloak } from 'assets/images/icons'

import './styles.scss';

export const ProtocolsContainer: React.FC = () => {
  const { t } = useTranslation('protocols');

  return (
    <section id="protocols">
      <div className="protocols__container">
        <div className="protocols__items">
          <div className="protocols__item blur gradient-bg gradient-bg-bottom">
            <img src={lockout} alt="lockout" />
            <p className="protocols__item-text">
              {t('Supports_modern_protocols_')}
              <span>{t('To_bypass_blocks_')}</span>
            </p>
          </div>
          <div className="protocols__item blur gradient-bg gradient-bg-bottom">
            <img src={popular} alt="popular" />
            <p className="protocols__item-text">
              {t('Popular_and_reliable_')}
              <span>{t('OpenVPN_and_WireGuard_')}</span>
            </p>
          </div>
          <div className="protocols__item blur gradient-bg gradient-bg-bottom">
            <img src={amneziaWG} alt="amneziaWG" />
            <p className="protocols__item-text">
              {t('AmneziaWG_with_traffic_recognition_protection_')}
              <span>{t('And_WireGuard_performance_')}</span>
            </p>
          </div>
          <div className="protocols__item blur gradient-bg gradient-bg-bottom">
            <img src={overCloak} alt="overCloak" />
            <p className="protocols__item-text">
              <span>{t('OpenVPN_over_Cloak_-_')}</span>
              {t('Works_even_where_other_VPNs_don_t_')}
              <span>{t('In_China_Iran_and_Turkmenistan_')}</span>
            </p>
          </div>
        </div>
        <NavLink className="protocols__link blur" to="#supported-platforms">
          {t('List_of_supported_protocols_by_platform_')}
        </NavLink>
      </div>
    </section>
  );
}
