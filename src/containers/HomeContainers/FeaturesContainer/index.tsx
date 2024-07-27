import React from 'react';

import './styles.scss';

export const FeaturesContainer: React.FC = () => {
  return (
    <section id="features">
      <div className="features__container">
        <div className="features__content circle-bg">
          <ul className="features__content-items blur gradient-bg gradient-bg-top ">
            <li className="features__content-item">
              Максимальный
              <br />
              уровень
              <span> приватности</span>
            </li>
            <li className="features__content-item">
              Высокая
              <span> защищенность
                <br />
                от блокировок</span>
            </li>
            <li className="features__content-item">
              <span>Высокая скорость <br /> работы: </span>
              более 24 <br />локаций серверов <br />по всему Миру
            </li>
            <li className="features__content-item">
              Невысокая стоимость
            </li>
          </ul>
          <div className="guarantee">
            <h5 className="guarantee__title">Передумали?</h5>
            <h5 className="guarantee__text">
              Ничего страшного! Полностью вернем деньги
              <span> в течение первых 15 дней!</span>
            </h5>
          </div>
        </div>

      </div>
    </section>
  )
}