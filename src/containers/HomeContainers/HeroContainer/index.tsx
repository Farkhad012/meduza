import React from 'react';

import { Button, Logo } from 'components/';

import './styles.scss';

export const HeroContainer: React.FC = () => {
  return (
    <section id="hero">
      <div className="hero__container">
        <Logo />
        <h1 className="hero__title">создай свой
          <span> персональный VPN </span>
          в несколько кликов
        </h1>
        <Button color="purple" text="создать свой vpn" />
      </div>
    </section>
  )
}