import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PathName } from 'constants/';

import { ModalContext } from 'context/ModalContext';
import { BurgerContext } from 'context/burgerContext';

import { SignUp, SignIn } from 'pages';
import { Modal } from '@mui/material';

import { AuthContext } from 'context/authContext';
import { LangMenu } from 'components/LangMenu';

import { Logo, ModalPaper, Glow } from 'components';

import './styles.scss';

export const Header: React.FC = () => {
  const { t } = useTranslation('header');
  const { isAuthenticated } = useContext(AuthContext)
  const { openModal, setOpenModal } = useContext(ModalContext);
  const burgerContext = useContext(BurgerContext);
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const handleClose = () => {
    setOpenModal(null)
  };

  const handleToggleMenu = () => {
    burgerContext.setIsBurgerOpen(!burgerContext.isBurgerOpen);
  }

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  }

  const handleClick = () => {
    isAuthenticated ? navigate(PathName.AccountPage) : setOpenModal('sign');
  }

  return (
    <header className="header">
      <div className="container">
        {currentPath === PathName.Home && (
          <>
            <Glow top="0px" left="50%" height="20vw" width="40vw" />
          </>
        )}

        <div className={`wrapper " ${currentPath === PathName.Home ? "landing" : "account"}`}>
          <div className="header__container">
            {currentPath === PathName.Home ? (
              <>
                <LangMenu />
                <button
                  onClick={handleClick}
                  className="header__button"
                >
                  {t('Personal_account_')}
                </button>
              </>
            ) : (
              <>
                <Logo />
                <div className="header__buttons">
                  <LangMenu classNameBox="account-lang-button" />
                  <button className="header__button header-support">
                    {t('Support_')}
                  </button>
                  <button onClick={handleToggleMenu} className="header__button burger">
                    {t('Menu_')}
                  </button>
                  <div className="currency">
                    <p>{t('Id_')}:000000</p>
                    <span>{t('Currency_')}: 0.00 </span>
                  </div>
                </div>
              </>
            )}

            <Modal
              className="modal"
              open={openModal === 'sign'}
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
