import React, {useState} from "react";

import { notificationCloseIcon } from "assets/images/icons";

import './styles.scss';

interface NotificationProps {
  message: string;
}

export const Notification: React.FC<NotificationProps> = ({ message }) => {

  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="notification">
      <button
        onClick={handleClose}
        className="notification__close-btn">
        <img src={notificationCloseIcon} alt="notificationCloseIcon" />
      </button>
      <div className="notification__message">{message}</div>
    </div>
  )
}