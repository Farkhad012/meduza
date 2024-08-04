import React from 'react';
import { useTranslation } from 'react-i18next';

import { Notification, ContactSupport } from 'components';



import './styles.scss';

// interface UserAccountProps {
//   color: 'purple' | 'blue' | 'white';
//   text: string;
//   textColor?: string;
//   fontSize?: number;
// }

export const UserAccount: React.FC = () => {
  const { t } = useTranslation('userAccount');

  return (
    <div className="user-account">
      <Notification message={t('There_are_no_services_requiring_payment_and_extension_')} />
      <Notification message={t('Payment_is_not_required_the_balance_is_sufficient_')} />
      <Notification message={t('You_have_no_active_services_')} />
      <ContactSupport />
    </div>
  );
};
