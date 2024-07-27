import React from 'react';

import { NavLink } from 'react-router-dom';

import { lockout, popular, amneziaWG, overCloak } from 'assets/images/icons'

import './styles.scss';

export const ProtocolsContainer: React.FC = () => {
  return (
    <section id="protocols">
      <div className="protocols__container">
        <div className="protocols__items">
          <div className="protocols__item blur gradient-bg gradient-bg-bottom">
            <img src={lockout}></img>
            <p> Поддерживает современные протоколы <span> для обхода блокировок</span></p>
          </div>
          <div className="protocols__item blur gradient-bg gradient-bg-bottom">
            <img src={popular}></img>
            <p> Популярные и надежные <span> OpenVPN и WireGuard.</span></p>
          </div>
          <div className="protocols__item blur gradient-bg gradient-bg-bottom">
            <img src={amneziaWG}></img>
            <p> AmneziaWG с защитой от распознавания трафика<span> и производительностью  WireGuard.</span></p>
          </div>
          <div className="protocols__item blur gradient-bg gradient-bg-bottom">
            <img src={overCloak}></img>
            <p>
              <span>OpenVPN over Cloak -</span>
              работает даже там, где другие VPN не работают
              <span>— в Китае, Иране и Туркменистане</span>
            </p>
          </div>
        </div>
        <NavLink className="protocols__link" to="#supported-platforms">Список поддерживаемых протоколов по платформам</NavLink>
      </div>
    </section>
  )
}