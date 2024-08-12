import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@mui/material';

import { ModalContext } from 'context/ModalContext';

import { Button, Logo } from 'components/';

import { Order } from 'pages';

import './styles.scss';

export const HeroContainer: React.FC = () => {
  const { t } = useTranslation('hero');
  const { openModal, setOpenModal } = useContext(ModalContext);

  const handleToggle = () => {
    openModal === null ? setOpenModal("order") : setOpenModal(null);    
  }

  return (
    <section id="hero">
      <div className="hero__container">
        <Logo />
        <h1 className="hero__title">
          {t('Create_your_')}
          <span>
            {t('Personal_vpn_')}
          </span>
          {t('In_a_few_clicks_')}
        </h1>
        <Button onClick={handleToggle} color="purple" text={t('Create_your_vpn_')} />

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
          onClose={handleToggle}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Order
            toggleForm={handleToggle}
          />
        </Modal>

      </div>


    </section>
  )
}