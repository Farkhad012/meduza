import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PathName } from 'constants/';

import './styles.scss';

export const Footer: React.FC = () => {
  const { t } = useTranslation('footer');

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <footer className="footer">
      <div className="container">
        <div className={`wrapper " ${currentPath === PathName.Home ? "landing" : "account"}`}>
          <nav className="footer__container">
            <div className="footer__nav">
              <h4 className="footer__nav-title">
                {t('About_us_')}
              </h4>
              <div className="footer__nav-links">
                <NavLink to="link" className="footer__nav-link">
                  {t('Contacts_')}
                </NavLink>
                <NavLink to="link" className="footer__nav-link">
                  {t('Terms_of_service_')}
                </NavLink>
                <NavLink to="link" className="footer__nav-link">
                  {t('Refund_cancellation_policy_')}
                </NavLink>
                <NavLink to="link" className="footer__nav-link">
                  {t('Privacy_policy_')}
                </NavLink>
              </div>
            </div>
            <div className="footer__nav">
              <h4 className="footer__nav-title">
                {t('Support_')}
              </h4>
              <div className="footer__nav-links">
                <NavLink to="link" className="footer__nav-link">
                  {t('Technical_support_service_')}
                </NavLink>
                <NavLink to="link" className="footer__nav-link">
                  {t('Looking_glass_')}
                </NavLink>
                <NavLink to="link" className="footer__nav-link">
                  {t('How_to_connect_to_vps_on_ipv6_from_ipv4_address_')}
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}