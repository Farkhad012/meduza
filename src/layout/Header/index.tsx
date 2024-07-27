import React, { useState, useContext } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

import { PathName } from 'constants/';

import { LoginFormContext } from 'context/loginFormContext';
import { BurgerContext } from 'context/burgerContext';

import { SignUp, SignIn } from 'pages';
import { Logo, ModalPaper } from 'components';
import { Modal } from '@mui/material';

import './styles.scss';

export const Header: React.FC = () => {
  const loginModalContext = useContext(LoginFormContext);
  const burgerContext = useContext(BurgerContext);

  const [isSignUp, setIsSignUp] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const location = useLocation();
  const currentPath = location.pathname;
  const handleClose = () => {
    loginModalContext.setOpenModal(false);
  };

  const handleOpen = () => {
    loginModalContext.setOpenModal(true);
  }

  const handleToggleMenu = () => {
    burgerContext.setIsBurgerOpen(!burgerContext.isBurgerOpen);
  }

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  }

  return (
    <header className="header">
      <div className="container">
        <div className={`wrapper " ${currentPath === PathName.Home ? "landing" : "account"}`}>
          <div className="header__container">
            {currentPath === PathName.Home ? (
              <>
                <button className="header__button-round">RU</button>
                <NavLink
                  className="header__button"
                  to={PathName.UserAccount}
                >Личный кабинет
                </NavLink>
              </>
            ) : (
              <>
                <Logo />
                <div className="header__buttons">
                  <button className="header__button-round">RU</button>
                  <button className="header__button header-support">Поддержка</button>
                  <button onClick={handleToggleMenu} className="header__button burger">Меню</button>                  
                </div>
              </>
            )}

            <Modal
              className="modal"
              open={loginModalContext.openModal}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ModalPaper handleClose={handleClose}>
                {isSignUp ? <SignUp toggleForm={toggleForm} /> : <SignIn toggleForm={toggleForm} />}
              </ModalPaper>
            </Modal>

          </div>
        </div>
      </div>
    </header>
  );
};
