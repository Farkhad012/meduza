import React, { useState, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'components';

import './styles.scss';

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, value, onChange, required }) => (
  <div className="change__form-item">
    <p>{label} {required && '*'}</p>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

interface FormData {
  fullName: string;
  dateOfBirth: string;
  passportData: string;
  mailingAddress: string;
  postcode: string;
  phoneNumber: string;
  email: string;
}

export const PaymentDetailsChange: React.FC = () => {
  const { t } = useTranslation('paymentDetailsChange');
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    dateOfBirth: '',
    passportData: '',
    mailingAddress: '',
    postcode: '',
    phoneNumber: '',
    email: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>
      <div className="change__form-content">
        <InputField
          label={t('Full_name_')}
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <InputField
          label={t('Date_of_birth_')}
          type="text"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
        <InputField
          label={t('Passport_data_')}
          type="text"
          name="passportData"
          value={formData.passportData}
          onChange={handleChange}
          required
        />
        <InputField
          label={t('Mailing_address_')}
          type="text"
          name="mailingAddress"
          value={formData.mailingAddress}
          onChange={handleChange}
          required
        />
        <InputField
          label={t('Postcode_')}
          type="text"
          name="postcode"
          value={formData.postcode}
          onChange={handleChange}
          required
        />
        <div className="change__form-contacts">
          <InputField
            label={t('Phone_number_')}
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <InputField
            label={t('Email_')}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <Button text={t('Save_information_')} color='purple' width={100}/>
      </div>
    </>
  );
};
