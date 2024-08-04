import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { Button } from "components";

import './styles.scss'
import { PathName } from "constants/";

export const SetPasswordContainer: React.FC = () => {
  const { t } = useTranslation('setPassword');
  const navigate = useNavigate();

  const handleSetPassword =() => {
    navigate(PathName.LoginPasswordChange);
  }

  return (
    <div className="set-password__container">
      <p className="set-password__title">
        {t('Please_set_a_password_to_access_your_personal_account_using_the_link_')}
      </p>
      <Button
        onClick={handleSetPassword}
        color={"white"}
        text={t('Set_password_')}
        textColor={"black"}
        fontSize={16}
      />
    </div>
  )
}