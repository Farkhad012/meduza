import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AuthContext } from 'context/authContext';

import { Button } from 'components';

import './styles.scss';

interface SignInProps {
  toggleForm: () => void;
}

export const SignIn: React.FC<SignInProps> = ({ toggleForm }) => {
  const { t } = useTranslation('signIn');
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Здесь можно обработать данные формы, отправить их на сервер и т.д.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleSignIn = () => {
    // setIsAuthenticated(!isAuthenticated);
    alert("Вы вошли!")
  }

  return (
    <div id="modal">
      <div className="modal__container">
        <form className="modal__form" onSubmit={handleSubmit} method="post" name="sign_form">
          <div className="modal__form-header">
            <button className="modal__form-close" type="button"></button>
            <h2>
              {t('Sign_in_')}
            </h2>
          </div>

          <div className="modal__form-content">
            <div className="modal__form-item">
              <p>{t('Login_')}</p>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="modal__form-item">
              <p>{t('Password_')}</p>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <NavLink to="link">{t('Forgot_your_password_')}</NavLink>
          </div>

          <div className="modal__form-footer">
            <p>{t('New_member_')}
              <NavLink
                className="modal__form-footer-link"
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleForm();
                }}>{t('Sign_up_')}
              </NavLink>
            </p>
            <Button type="submit" onClick={handleSignIn} color='purple' text={t('Sign_in_')} />
          </div>
        </form>
      </div>
    </div>
  );
};
