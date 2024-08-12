import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';

export const RangeSlider: React.FC = () => {
  const { t } = useTranslation('order');
  const [value, setValue] = useState<number>(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const trackStyle = {
    background: `linear-gradient(
      to right,
      #C37BD9 ${(value - 1) * 100 / 6}%,
      #D9D9D9 ${(value - 1) * 100 / 6}%
    )`,
    borderRadius: '50px',
  };

  return (
    <div className="range-slider">
      <div className="slider-labels slider-labels-top">
        <span className="label">
          -5% {t('OFF_')}
        </span>
        <span className="label">
          -10% {t('OFF_')}
        </span>
        <span className="label">
          -20% {t('OFF_')}
        </span>
        <span className="label">
          -30% {t('OFF_')}
        </span>
        <span className="label">
          -40% {t('OFF_')}
        </span>
        <span className="label">
          -50% {t('OFF_')}
        </span>
      </div>
      <div className="slider-track-wrapper">
        <input
          type="range"
          min="1"
          max="7"
          value={value}
          onChange={handleChange}
          className="slider"
          style={trackStyle}
        />
        <div className="slider-track-lines">
          {[0, 1, 2, 3, 4, 5, 6].map(index => {
            const percent = (index * 100) / 6;
            const isVisible = percent >= ((value - 1) * 100) / 6;
            return (
              <div
                key={index}
                className={`track-line`}
                style={{ left: `${percent}%`, opacity: isVisible ? 1 : 0 }}
              >
                <div className="track-line-inner"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="slider-labels slider-labels-bottom">
        <span className="label">
          1 {t('Month_')}
        </span>
        <span className="label">
          3 {t('Month_')}
        </span>
        <span className="label">
          6 {t('Month_')}
        </span>
        <span className="label">
          12 {t('Month_')}
        </span>
        <span className="label">
          24 {t('Month_')}
        </span>
        <span className="label">
          36 {t('Month_')}
        </span>
        <span className="label">
          60 {t('Month_')}
        </span>
      </div>
    </div>
  );
};
