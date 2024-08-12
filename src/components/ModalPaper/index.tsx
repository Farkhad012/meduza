import React, { forwardRef } from 'react';

import { Box } from '@mui/material';
import { close } from 'assets/images/icons';

import './styles.scss';

interface ModalPaperProps {
  handleClose: () => void;
  children: React.ReactNode;
}

export const ModalPaper = forwardRef<HTMLDivElement, ModalPaperProps>(({ children, handleClose}, ref) => {
  return (
    <Box ref={ref} className="modal-paper">
      <div className='modal-paper__header'>
        <button
          onClick={handleClose}
          className='close-btn'>
          <img src={close} alt="close" />
        </button>
      </div>
      {children}
    </Box>
  );
});

