import React from 'react';

import { share, world, settings } from 'assets/images/icons'

import './styles.scss';

export const AdvantagesContainer: React.FC = () => {
  return (
    <section id="advantages">
      <div className="advantages__container">
        <div className="advantages__items">
          <div className="advantages__item">
            <div className="advantages__item-icon">
              <img src={share} alt="share-icon" />
            </div>
            <p>Делитесь подключением к VPN с кем угодно</p>
            <span>В пару кликов и без ограничений</span>

          </div>
          <div className="advantages__item">
            <div className="advantages__item-icon">
              <img src={world} alt="world-icon" />
            </div>
            <p>Выбирайте, какие сайты будут открываться через VPN, а какие нет</p>
            <span>Раздельное туннелирование доступно на всех платформах</span>

          </div>
          <div className="advantages__item">
            <div className="advantages__item-icon">
              <img src={settings} alt="settings-icon" />
            </div>
            <p>Импортируйте настройки подключения для WireGuard и OpenVPN</p>
            <span>Для упрощённой настройки</span>
          </div>
        </div>

      </div>
    </section>
  )
}