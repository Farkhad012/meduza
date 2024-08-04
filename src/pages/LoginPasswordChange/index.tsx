import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'

import { Button } from 'components';

import './styles.scss';

// interface UserAccountProps {
//   color: 'purple' | 'blue' | 'white';
//   text: string;
//   textColor?: string;
//   fontSize?: number;
// }

export const LoginPasswordChange: React.FC = () => {
  const { t } = useTranslation('setPasswordChange');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [copyPassword, setCopyPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Тут можно обработать данные формы, отправить их на сервер и т.д.
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('CopyPassword:', copyPassword);
  };


  return (
    <>
      <form className="change__form" onSubmit={handleSubmit} method="post" name="sign_form">
        <div className="change__form-content">
          <div className="change__form-item">
            <p>{t('Login_')}: *</p>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="change__form-item">
            <p>{t('Password_')}: *</p>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="change__form-item">
            <p>{t('Password_repeat_')}: *</p>
            <input
              type="password"
              name="password-repeat"
              id="password-repeat"
              value={copyPassword}
              onChange={(e) => setCopyPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="change__form-footer">
          <Button color='blue' text={t('Change_the_data_')} />
        </div>

      </form>
    </>
  );
};
