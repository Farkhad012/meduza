import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Modal } from '@mui/material';

import { PathName } from 'constants/';

import { BurgerContext } from 'context/burgerContext';
import { AuthContext } from 'context/authContext';

import { CreateTicket, Order } from 'pages';

import { Button, Logo, ModalPaper } from 'components';

import { burgerIcon } from 'assets/images/icons';

import './styles.scss'
import { ModalContext } from 'context/ModalContext';

export const NavMenuContainer: React.FC = () => {
  const { t } = useTranslation('burgerMenu');
  const burgerContext = useContext(BurgerContext);
  const { openModal, setOpenModal } = useContext(ModalContext);
  const { setIsAuthenticated } = useContext(AuthContext)


  const handleToggleMenu = () => {
    burgerContext.setIsBurgerOpen(!burgerContext.isBurgerOpen);
  }

  const handleOpenCreateTicket = () => {
    console.log('Opening Create Ticket Modal');
    setOpenModal('createTicket');
  };

  const handleClose = () => {
    console.log('Closing Create Ticket Modal');
    setOpenModal(null);
  };

  const handleToggle = () => {
    setOpenModal('order');
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
  }

  return (
    <div className={`nav__container ${burgerContext.isBurgerOpen ? "open" : ""}`}>
      <div className="menu-wrapper">

        <div className="nav__container-header">
          <Logo />
          <button onClick={handleToggleMenu} className="burger">
            <img src={burgerIcon} alt="burgerIcon" />
          </button>
        </div>
        <div className="nav__container-content">
          <div className="balance">{t('My_balance')}: $0.00</div>
          <div className="service-order">
            <h3>
              {t('Service_order_')}
            </h3>
            <Button onClick={handleToggle} color="purple" text="+ VPN" fontSize={16} />
          </div>
        </div>
        <div className="nav__menu">
          <div className="nav__menu-block support">
            <h3>
              {t('Technical_support_')}
            </h3>
            <div className="nav__menu-links">
              <NavLink onClick={handleToggleMenu} to={PathName.AllTickets}>
                {t('All_tickets_')}
              </NavLink>
              <button onClick={handleOpenCreateTicket} className={`${openModal && "active"}`}>
                {t('Create_ticket_')}
              </button>
            </div>
          </div>
          <div className="nav__menu-block management">
            <h3>
              {t('Service_management_')}
            </h3>
            <div className="nav__menu-links">
              <NavLink onClick={handleToggleMenu} to={PathName.ServiceManagement}>
                {t('Payment_and_extension_of_services_')}
              </NavLink>
              <NavLink onClick={handleToggleMenu} to={PathName.ActiveServices}>
                {t('Active_services_')}
              </NavLink>
            </div>
          </div>
          <div className="nav__menu-block payments">
            <h3>
              {t('Payments_')}
            </h3>
            <div className="nav__menu-links">
              <NavLink onClick={handleToggleMenu} to={PathName.PaymentsHistory}>
                {t('Payment_history_')}
              </NavLink>
              <NavLink onClick={handleToggleMenu} to={PathName.TopUpBalance}>
                {t('Top_up_balance_')}
              </NavLink>
            </div>
          </div>
          <div className="nav__menu-block account">
            <h3>
              {t('Account_')}
            </h3>
            <div className="nav__menu-links">
              <NavLink onClick={handleToggleMenu} to={PathName.PaymentDetails}>
                {t('Payment_details_')}
              </NavLink>
              <NavLink onClick={handleToggleMenu} to={PathName.LoginPasswordChange}>
                {t('Login_password_change_')}
              </NavLink>
            </div>
          </div>
        </div>
        <div className="nav-container__footer">
          <Button onClick={handleLogout} color="blue" text={t('Logout_')} fontSize={16} />
        </div>
      </div>

      <Modal
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginLeft: '5vw',
          marginRight: '5vw',
          overflowY: 'auto',
        }}
        className="modal"
        open={openModal === 'createTicket'}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalPaper handleClose={handleClose}>
          <CreateTicket />
        </ModalPaper>
      </Modal>

      <Modal
        sx={{
          maxHeight: '100%',
          display: 'flex',
          // alignItems: window.innerHeight > 800 ? "center" : "flex-start",
          justifyContent: 'center',
          marginLeft: '5vw',
          marginRight: '5vw',
          overflowY: 'auto',
        }}
        className="modal"
        open={openModal === 'order'}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Order
          toggleForm={handleClose}
        />
      </Modal>

    </div >
  )
}