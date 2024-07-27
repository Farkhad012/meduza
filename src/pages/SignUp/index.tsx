import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from 'components';

import './styles.scss';

interface SignUpProps {
  toggleForm: () => void;
}

export const SignUp: React.FC<SignUpProps> = ({ toggleForm }) => {
  return (
    <div id="sign">
      <div className="sign__container">
        <form className="sign__form" action="" method="post" name="sign_form">
          <div className="sign__form-header">
            <button className="sign__form-close"></button>
            <h2>Sign up</h2>
          </div>

          <div className="sign__form-content">
            <div className="sign__form-item">
              <p>Login</p>
              <input type="email" name="" id="email" />
            </div>
            <div className="sign__form-agreement">
              <input type="checkbox" name="" id="checkbox" />
              <p>Agree with the terms of
                <NavLink
                  className="sign__form-footer-link"
                  to="#"
                > the offer
                </NavLink>
              </p>
            </div>
          </div>

          <div className="sign__form-footer">
            <p>Already have an<br /> account?
              <NavLink
                className="sign__form-footer-link"
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleForm();
                }}> Sign in
              </NavLink>
            </p>
            <Button color='purple' text='sign up' />
          </div>

        </form>
      </div>
    </div>
  )
}