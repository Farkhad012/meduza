import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import map from 'assets/images/map.svg';
import { point, popoverClose } from 'assets/images/icons'

import { Glow } from 'components';

import './styles.scss';

interface Point {
  id: number;
  x: number;
  y: number;
  country: string;
  info: string;
}

const points: Point[] = [
  { id: 1, x: 19, y: 62, country: 'Мексика', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, odit!' },
  { id: 2, x: 49, y: 44, country: 'Нидерланды', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, odit!' },
  { id: 3, x: 85, y: 55, country: 'Япония', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, odit!' },
  { id: 4, x: 23, y: 54, country: 'США', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, odit!' },
];

export const LocationContainer: React.FC = () => {
  const { t } = useTranslation('location');
  const [selectedPoint, setSelectedPoint] = useState<Point | null>(null);

  const handlePointClick = (point: Point) => {
    setSelectedPoint(point);
  };

  return (
    <section id="location">      
      <div className="location__container">
        <h2 className="location__title blur">
          <span>{t('Choose_the_location_')}</span>
          {t('Where_your_vpn_should_be_hosted_')}
        </h2>
        <div className="location__map-container">
          <div className="location__map-wrapper">
            <img className="location__img" src={map} alt="Map" />
            <div className="location__points">
              {points.map(countryPoint => (
                <img
                  src={point}
                  key={countryPoint.id}
                  className="location__point"
                  style={{ left: `${countryPoint.x}%`, top: `${countryPoint.y}%` }}
                  onClick={() => handlePointClick(countryPoint)}
                />
              ))}
            </div>
            {selectedPoint && (
              <div className="location__info-box gradient-bg gradient-bg-top blur" style={{ left: `${selectedPoint.x - 12}%`, top: `${selectedPoint.y + 4}%` }}>
                <div className="location__info-title">
                  <h4>{selectedPoint.country}</h4>
                  <button onClick={() => setSelectedPoint(null)}>
                    <img src={popoverClose} alt="close" />
                  </button>
                </div>
                <p>{selectedPoint.info}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
