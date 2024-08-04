import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@mui/material';

import { ModalContext } from 'context/ModalContext';

import { CreateTicket } from 'pages';

import { Button, DashboardTable, ModalPaper } from 'components';

import './styles.scss';

interface Ticket {
  id: number;
  topic: string;
  status: string;
  createdDate: string;
  updatedDate: string;
}

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'topic', label: 'Name' },
  { key: 'status', label: 'Status' },
  { key: 'createdDate', label: 'Created' },
  { key: 'updatedDate', label: 'Updated' }
];

export const AllTickets: React.FC = () => {
  const { t } = useTranslation('allTickets');
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const { openModal, setOpenModal } = useContext(ModalContext);

  const columns = [
    { key: 'id', label: '"ID"' },
    { key: 'topic', label: 'Name' },
    { key: 'status', label: 'Status' },
    { key: 'createdDate', label: 'Created' },
    { key: 'updatedDate', label: 'Updated' }
  ];

  const handleOpenCreateTicket = () => {
    console.log('Opening Create Ticket Modal');
    setOpenModal(!openModal);
  };

  const handleClose = () => {
    console.log('Closing Create Ticket Modal');
    setOpenModal(!openModal);
  };

  return (
    <div className="all-tickets">
      <div className="all-tickets__header">
        <p className="contact-support">
        {t('All_processing_of_your_')}
          <br />
          {t('applications_will_appear_here_')}
          </p>
        <Button
          onClick={handleOpenCreateTicket}
          text={t('New_ticket_')}
          textColor="white"
          color="blue"
        />
      </div>
      <div className="all-tickets__content">
        <DashboardTable
          ariaLabel="Таблица обслуживания"
          columns={columns}
          content={tickets}
          error={t('No_tickets_found_')}
        />
      </div>

      <Modal
        className="modal"
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalPaper handleClose={handleClose}>
          <CreateTicket />
        </ModalPaper>
      </Modal>
    </div>
  );
};
