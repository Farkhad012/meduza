import React from "react";

import { Button } from "components";

import './styles.scss'

export const SetPasswordContainer: React.FC = () => {
  return (
    <div className="set-password__container">
      <p>Please set a password to access your personal account using the link:</p>
      <Button
        color={"white"}
        text={"set password"}
        textColor={"black"}
        fontSize={16}
      />
    </div>
  )
}