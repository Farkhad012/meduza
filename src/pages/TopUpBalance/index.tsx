import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { DashboardSectionTitle } from 'components';

import { PayPalLogo } from 'assets/images/icons';

import './styles.scss';

export const TopUpBalance: React.FC = () => {
  const { t } = useTranslation('topUpBalance');
  const [amount, setAmount] = useState('Enter Promocode');

  return (
    <div className="top-up-balance">
      <div className="promocode-input">
        <textarea
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder={t('Enter_the_amount_of_payment_to_top_up_')}
        />
        <button onClick={() => alert(`Topping up balance by $${amount}`)}>
          ${amount || '0.00'}
        </button>
      </div>
      <DashboardSectionTitle text={t('Payment_methods_')} />
      <div className="payment-methods">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className={`payment-method ${index === 0 ? 'selected' : 'disabled'}`} key={index}>
            <div className="payment-info">
              <h3>PayPal</h3>
              <p>$, €, £</p>
            </div>
            <div className="payment-logo">
              <img src={PayPalLogo} alt="PayPal Logo" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
