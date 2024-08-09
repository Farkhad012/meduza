import React, { useState } from 'react';
import './styles.scss'; // Подключите стили

export const RangeSlider: React.FC = () => {
  const [value, setValue] = useState<number>(1); // Указываем тип состояния

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  // Преобразование значения ползунка в проценты для градиента
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
        <span className="label"></span>
        <span className="label">-5% OFF</span>
        <span className="label">-10% OFF</span>
        <span className="label">-20% OFF</span>
        <span className="label">-30% OFF</span>
        <span className="label">-40% OFF</span>
        <span className="label">-50% OFF</span>
      </div>
      <div className="slider-track-wrapper">
        <input
          type="range"
          min="1"
          max="7"
          value={value}
          onChange={handleChange}
          className="slider"
          style={trackStyle} // Применяем динамическое изменение фона
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
        <span className="label">1 month</span>
        <span className="label">3 months</span>
        <span className="label">6 months</span>
        <span className="label">12 months</span>
        <span className="label">24 months</span>
        <span className="label">36 months</span>
        <span className="label">60 months</span>
      </div>
    </div>
  );
};
