import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ModalContext } from 'context/ModalContext';

import { Button } from 'components';

import './styles.scss';

export const CreateTicket: React.FC = () => {
  const { t } = useTranslation('createTicket');
  const { setOpenModal } = useContext(ModalContext);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  }

  return (
    <div id="new-ticket">
      <div className="new-ticket__container">
        {showSuccess ? (
          <div className="success-message">
            <p>
              {t('Ticket_successfully_created_')}!
            </p>
          </div>
        ) : (
          <form className="modal__form" action="" method="post" name="new_ticket_form" onSubmit={handleSubmit}>
            <div className="modal__form-header">
              <button className="modal__form-close" type="button" onClick={handleClose}></button>
              <h2>
                {t('New_ticket_')}
                <br />
                {t('To_the_support_')}
              </h2>
            </div>

            <div className="modal__form-content">
              <div className="modal__form-item">
                <textarea
                  placeholder={t('Subject_')}
                  name="subject"
                  id="subject"
                  required
                />
                <textarea
                  className='text'
                  placeholder={t('Text_')}
                  name="text"
                  id="text"
                  required
                />
              </div>
            </div>

            <div className="modal__form-footer">
              <Button
                border='border'
                onClick={handleClose}
                color='white'
                textColor='black'
                text={t('Cancel_')}
              />
              <Button
                type="submit"
                color='purple'
                text={t('Create_')}
              />
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
