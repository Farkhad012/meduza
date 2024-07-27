import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { BurgerContext } from "context/burgerContext";

import { Button, Logo } from "components";

import { burgerIcon } from 'assets/images/icons';

import './styles.scss'

export const NavMenuContainer: React.FC = () => {
  const burgerContext = useContext(BurgerContext);

  const handleToggleMenu = () => {
    burgerContext.setIsBurgerOpen(!burgerContext.isBurgerOpen);
  }

  return (
    <div className={`nav__container ${burgerContext.isBurgerOpen ? "open" : ""}`}>
      <div className="menu-wrapper">

        <div className="nav__container-header">
          <Logo />
          <button onClick={handleToggleMenu} className="burger">
            <img src={burgerIcon} alt="burgerIcon" />
          </button>
        </div>
        <div className="nav__container-content">
          <div className="balance">My balance: $0.00</div>
          <div className="service-order">
            <h5>Service order</h5>
            <Button color="purple" text="+ VPN" fontSize={16} />
          </div>
        </div>
        <div className="nav__menu">
          <div className="nav__menu-block support">
            <h5>Technical support</h5>
            <div className="nav__menu-links">
              <NavLink to="#">All tickets</NavLink>
              <NavLink to="#">Create ticket</NavLink>
            </div>
          </div>
          <div className="nav__menu-block management">
            <h5>Service management</h5>
            <div className="nav__menu-links">
              <NavLink to="#">Payment and extension of services</NavLink>
              <NavLink to="#">Active Services</NavLink>
            </div>
          </div>
          <div className="nav__menu-block payments">
            <h5>Payments</h5>
            <div className="nav__menu-links">
              <NavLink to="#">Payment history</NavLink>
              <NavLink to="#">Top Up Balance</NavLink>
            </div>
          </div>
          <div className="nav__menu-block account">
            <h5>Account</h5>
            <div className="nav__menu-links">
              <NavLink to="#">Payment details</NavLink>
              <NavLink to="#">Login/password change</NavLink>
            </div>
          </div>
        </div>
        <div className="nav-container__footer">
          <Button color="blue" text="logout" fontSize={16} />
        </div>
      </div>

    </div>
  )
}