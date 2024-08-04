import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { PathName } from 'constants/';

import line from 'assets/images/icons/line.png';

import './styles.scss';

export const Logo: React.FC = () => {
  const location = useLocation();

  const isHomePage = location.pathname === PathName.Home;

  return (
    <>
      {isHomePage ? (
        <div className="logo">
          <img src={line} alt="line" />
          meduzavpn
          <img src={line} alt="line" />
        </div>
      ) : (
        <NavLink
          className="account-logo"
          to={PathName.Home}>
          <img src={line} alt="line" />
          <div>
            meduza
            <span className="account-logo__span">
              vpn
            </span>
          </div>
        </NavLink>
      )}
    </>
  );
};
