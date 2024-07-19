import React from "react";
import { NavLink } from "react-router-dom";
import { PathName } from "../../constants";

import line from '../../assets/images/icons/line.png'

import './styles.scss';

const Logo: React.FC = () => {
  return (
    <NavLink to={PathName.Home} className="logo">
      <img src={line} alt="line" />
      <span>
        meduzavpn
      </span>
      <img src={line} alt="line" />
    </NavLink>
  )
}

export { Logo };