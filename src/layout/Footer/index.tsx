import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import { PathName } from 'constants/';

import './styles.scss';

export const Footer: React.FC = () => {

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <footer className="footer">
      <div className="container">
        <div className={`wrapper " ${currentPath === PathName.Home ? "landing" : "account"}`}>
            <nav className="footer__container">
              <div className="footer__nav">
                <h4 className="footer__nav-title">About us</h4>
                <div className="footer__nav-links">
                  <NavLink to="#" className="footer__nav-link">Contacts</NavLink>
                  <NavLink to="#" className="footer__nav-link">Terms of Service</NavLink>
                  <NavLink to="#" className="footer__nav-link">Refund/cancellation policy</NavLink>
                  <NavLink to="#" className="footer__nav-link">Privacy policy</NavLink>
                </div>
              </div>
              <div className="footer__nav">
                <h4 className="footer__nav-title">Support</h4>
                <div className="footer__nav-links">
                  <NavLink to="#" className="footer__nav-link">Technical support service</NavLink>
                  <NavLink to="#" className="footer__nav-link">Looking Glass</NavLink>
                  <NavLink to="#" className="footer__nav-link">How to connect to VPS on IPv6 from IPv4 address?</NavLink>
                </div>
              </div>
            </nav>
        </div>
      </div>
    </footer>
  )
}