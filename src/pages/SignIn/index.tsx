import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from 'components';

import './styles.scss';

interface SignInProps {
  toggleForm: () => void;
}

export const SignIn: React.FC<SignInProps> = ({ toggleForm }) => {
  return (
    <div id="sign">
      <div className="sign__container">
        <form className="sign__form" action="" method="post" name="sign_form">
          <div className="sign__form-header">
            <button className="sign__form-close"></button>
            <h2>Sign in</h2>
          </div>

          <div className="sign__form-content">
            <div className="sign__form-item">
              <p>Email</p>
              <input type="email" name="" id="email" />
            </div>
            <div className="sign__form-item">
              <p>Password</p>
              <input type="password" name="" id="password" />
            </div>
            <NavLink to="#">Forgot your password?</NavLink>
          </div>

          <div className="sign__form-footer">
            <p>New member?
              <NavLink
                className="sign__form-footer-link"
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleForm();
                }}> Sign up
              </NavLink>
            </p>
            <Button color='purple' text='sign in' />
          </div>

        </form>
      </div>
    </div>
  )
}