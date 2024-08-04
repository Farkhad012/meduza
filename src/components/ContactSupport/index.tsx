import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Modal } from '@mui/material';

import { ModalContext } from 'context/ModalContext';

import { CreateTicket } from 'pages';

import { ModalPaper } from 'components/ModalPaper';

import './styles.scss';

export const ContactSupport: React.FC = () => {
  const { t } = useTranslation('contactSupport');
  const { openModal, setOpenModal } = useContext(ModalContext);

  const handleToggle = () => {
    setOpenModal(!openModal);
  }

  return (
    <>
      <p className="contact-support">
        {t('If_you_have_any_questions_we_recommend_contact_')}
        <a onClick={handleToggle}>
          {t('Technical_support_')}
        </a>
      </p>

      <Modal
        className="modal"
        open={openModal}
        onClose={handleToggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalPaper handleClose={handleToggle}>
          <CreateTicket />
        </ModalPaper>
      </Modal>
    </>
  );
};
