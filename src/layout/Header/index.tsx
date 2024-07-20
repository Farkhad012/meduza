import React from 'react';
// import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { PathName } from 'constants/';

import './styles.scss';

export const Header: React.FC = () => {
  // const location = useLocation();
  // const currentPath = location.pathname;

  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <div className="header__container">
            <button className="header__button-round">RU</button>

            <NavLink to={PathName.UserAccount}>
              <button className="header__button">Личный кабинет</button>
            </NavLink>

          </div>
        </div>
      </div>
    </header>
  );
};