import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Button, Checkbox } from 'components';

import './styles.scss';

interface SignUpProps {
  toggleForm: () => void;
}

export const SignUp: React.FC<SignUpProps> = ({ toggleForm }) => {
  const { t } = useTranslation('signUp');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isChecked) {
      // Тут можно обработать данные формы, отправить их на сервер и т.д.
      console.log('Email:', email);
      console.log('Agreed to terms:', isChecked);
    } else {
      alert('You must agree to the terms of the offer.');
    }
  };

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
              <p>
                {t('Email_')}
              </p>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="modal__form-agreement">
              <Checkbox
                checked={isChecked}
                onChange={setIsChecked}
              />
              <p>
                {t('Agree_with_the_terms_of_')}
                <NavLink
                  className="modal__form-footer-link"
                  to="#"
                >
                  {t('the_offer_')}
                </NavLink>
              </p>
            </div>
          </div>

          <div className="modal__form-footer">
            <p>
              {t('Already_have_')}
              <br />
              {t('An_account_')}
              <NavLink
                className="modal__form-footer-link"
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleForm();
                }}>
                {t('Sign_in_')}
              </NavLink>
            </p>
            <Button color='purple' text={t('Sign_up_')} />
          </div>
        </form>
      </div>
    </div>
  );
}
