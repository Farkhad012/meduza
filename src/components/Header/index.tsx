import React from "react";

// import { useLocation } from 'react-router-dom';

import './styles.scss';

const Header: React.FC = () => {
  // const location = useLocation();
  // const currentPath = location.pathname;

  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <div className="header__container">
            <button className="header__button-round">RU</button>
            <button className="header__button">Личный кабинет</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
