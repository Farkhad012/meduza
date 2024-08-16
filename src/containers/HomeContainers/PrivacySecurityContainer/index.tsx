import React from 'react';
import { useTranslation } from 'react-i18next';

import { lockout2, logs, encryption } from 'assets/images/icons'

import './styles.scss';

export const PrivacySecurityContainer: React.FC = () => {
  const { t } = useTranslation('privacySecurity');
  
  return (
    <section id="privacy">
      <div className="privacy__container">
        <div className="privacy__header blur gradient-bg gradient-bg-top">
          <h2>
            {t('Your_privacy_is_a_')}
            <span>{t('Priority_')}</span></h2>
          <div className="privacy__header-icon">
            <img src={lockout2} alt="lockout-icon" />
          </div>
          <div className="privacy__header-card">
            <p className="privacy__header-card-text">
              <span>
                {t('You_fully_control_your_data_')}
              </span>
              {t('The_application_does_not_collect_or_transmit_any_statistics_logs_or_other_information_about_users_and_their_data_')}
            </p>
          </div>
        </div>
        <div className="privacy__content">
          <div className="privacy__content-card blur">
            <div className="privacy__content-icon">
              <img src={logs} alt="logs-icon" />
            </div>
            <div className="privacy__content-text">
              <h3>
                {t('Does_not_keep_logs_')}
              </h3>
              <p>
                {t('A_separate_container_is_launched_for_each_vpn_protocol_They_can_be_deleted_with_one_click_They_do_not_write_logs_inside_themselves_and_do_nothing_other_than_their_direct_task_')}
              </p>
            </div>
          </div>
          <div className="privacy__content-card blur">
            <div className="privacy__content-icon">
              <img src={encryption} alt="encryption-icon" />
            </div>
            <div className="privacy__content-text">
              <h3>
                {t('Uses_smart_encryption_')}
              </h3>
              <p>
                {t('When_connecting_the_client_generates_a_new_key_and_a_new_security_certificate_and_sends_it_to_the_server_')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}