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

export const ActiveServices: React.FC = () => {
  const { t } = useTranslation('userAccount' || 'activeServices');

  return (
    <div className="active-services">
      <Notification message={t('You_have_no_active_services_')} />
    </div>
  );
};
