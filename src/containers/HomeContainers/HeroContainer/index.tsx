import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@mui/material';

import { OrderContext } from 'context/OrderContext';

import { Button, Logo, ModalPaper } from 'components/';

import { Order } from 'pages';

import './styles.scss';

export const HeroContainer: React.FC = () => {
  const { t } = useTranslation('hero');
  const { openModal, setOpenModal } = useContext(OrderContext);

  const handleToggle = () => {
    setOpenModal(!openModal);
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
            display: 'flex',
            alignItems: 'flex-start', // Выравнивание содержимого по началу (сверху)
            justifyContent: 'center', // Центрирование по горизонтали
            marginTop: '5vh', // Отступ сверху 10% от высоты экрана
            marginBottom: '5vh', // Отступ сверху 10% от высоты экрана
            overflowY: 'auto',
          }}
          className="modal"
          open={openModal}
          onClose={handleToggle}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Order toggleForm={handleToggle} />
        </Modal>

      </div>


    </section>
  )
}