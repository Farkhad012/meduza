import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Button, DashboardSectionTitle, Dropdown, Checkbox } from 'components';

import { PathName } from 'constants/';

import './styles.scss';

export const PaymentDetails: React.FC = () => {
  const { t } = useTranslation('paymentDetails');
  const [country, setCountry] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCountryChange = (newCountry: string) => {
    setCountry(newCountry);
  };

  const handleChangeClick = () => {
    navigate(`/${PathName.AccountPage}/${PathName.PaymentDetailsChange}`);
  };

  const handleCheckboxChange = (type: string) => {
    setSelectedType(selectedType === type ? null : type);
  };

  return (
    <div className="payment-details">
      <div className="payment-details__details-section">
        <h2 className="title">{t('Current_details_')}</h2>
        <p>
          {t('Mailing_address_')}: -
          <span></span>
        </p>
        <p>
          {t('Name_')}: -
          <span></span>
        </p>
        <p>
          {t('Passport_data_')}:
          <span> {t('Undefined_')}</span>
        </p>
        <p>
          {t('Date_of_Birth_')}:
          <span> 1900-01-01</span>
        </p>
        <p>
          {t('Postcode_')}:
          <span> 123456</span>
        </p>
        <p>
          {t('Phone_Number_')}:
          <span> 7 123 4567890</span>
        </p>
        <p>
          {t('Mail_')}:
          <span> email@email.com</span>
        </p>
        <p>
          {t('Resident_of_the_Russian_Federation_')}:
          <span>
            {t('Yes_')}
          </span>
        </p>
        <p>
          {t('Country_')}:
          <span> {country || 'RU'}</span>
        </p>
        <Button
          onClick={handleChangeClick}
          color="blue"
          text={t('Change_')}
          textColor="white"
        />        
      </div>
      <div className="payment-details__select-country">
        <DashboardSectionTitle text={t('Country_')} />
        <Dropdown
          options={['Russia', 'China', 'Spain']}
          onChange={handleCountryChange}
        />
      </div>
      <div className="payment-details__type">
        <h2 className="title">
          {t('Type_of_ownership_')}
        </h2>
        <div className="checkbox-group">
          <Checkbox
            text={t('Entrepreneur_')}
            checked={selectedType === 'entrepreneur'}
            onChange={() => handleCheckboxChange('entrepreneur')}
          />
          <Checkbox
            text={t('Company_')}
            checked={selectedType === 'company'}
            onChange={() => handleCheckboxChange('company')}
          />
          <Checkbox
            text={t('Individual_')}
            checked={selectedType === 'individual'}
            onChange={() => handleCheckboxChange('individual')}
          />
        </div>
        <Button color="purple" text={t('Save_change_')} textColor="white" />
      </div>
    </div>
  );
};
