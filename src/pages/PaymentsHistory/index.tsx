import React from 'react';
import { useTranslation } from 'react-i18next';

import { Notification } from 'components/Notification';

import './styles.scss';

// interface UserAccountProps {
//   color: 'purple' | 'blue' | 'white';
//   text: string;
//   textColor?: string;
//   fontSize?: number;
// }

export const PaymentsHistory: React.FC = () => {
  const { t } = useTranslation('paymentHistory');

  return (
    <div className="payment-history">
      <Notification message={t('You_have_not_top_up_your_balance_for_the_last_6_months_')} />
    </div>
  );
};
