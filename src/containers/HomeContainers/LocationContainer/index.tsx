import React from "react";

import map from '../../../assets/images/map.png'
import './styles.scss';

const LocationContainer: React.FC = () => {
  return (
    <section className="location">
      <div className="container">
        <div className="wrapper">
          <div className="location__container">
            <h2 className="location__title">
              <span>Выберите локацию </span>
              где должен быть размещен ваш ВПН
            </h2>
            <img className="location__img" src={map} alt="" />
          </div>
        </div>
      </div>

    </section>

  )
}

export { LocationContainer };