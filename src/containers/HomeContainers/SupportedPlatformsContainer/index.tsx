import React, { useRef, useEffect } from 'react';
import { windows, macos, linux, android, router, check, cross, arrowRight } from 'assets/images/icons';
import { supportMatrix } from './data';
import './styles.scss';

type Platform = 'windows' | 'macos' | 'linux' | 'android' | 'ios' | 'router';

const platformIcons: Record<string, string> = {
  windows,
  macos,
  linux,
  android,
  ios: macos,
  router,
  arrowRight,
};

export const PlatformsContainer: React.FC = () => {
  const platforms: Platform[] = Object.keys(supportMatrix[0]).filter(key => key !== 'protocol') as Platform[];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const customScrollbarRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && customScrollbarRef.current && thumbRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const thumbWidth = (clientWidth / scrollWidth) * clientWidth;
        const thumbLeft = (scrollLeft / scrollWidth) * clientWidth;

        thumbRef.current.style.width = `${thumbWidth}px`;
        thumbRef.current.style.transform = `translateX(${thumbLeft}px)`;
      }
    };

    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Инициализация ползунка

      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleCustomScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scrollContainerRef.current && customScrollbarRef.current) {
      const { clientWidth, scrollWidth } = scrollContainerRef.current;
      const newScrollLeft = (e.nativeEvent.offsetX / clientWidth) * scrollWidth;
      scrollContainerRef.current.scrollLeft = newScrollLeft;
    }
  };

  return (
    <section id="platforms">
      <div className="platforms__container">
        <div className="platforms__scrollbar">
          <div className="platforms__scrollbar-header">
            <div className="platforms__scrollbar-text">листайте вправо</div>
            <img src={arrowRight} className="platforms__scrollbar-arrow" alt="Scroll right" />
          </div>
          <div className="platforms__scrollbar-track" onClick={handleCustomScroll} ref={customScrollbarRef}>
            <div className="platforms__scrollbar-thumb" ref={thumbRef}></div>
          </div>
        </div>

        <div className="platforms__table-container" ref={scrollContainerRef}>
          <table className="platforms__table">
            <thead className="platforms__table-header">
              <tr>
                <th></th>
                {platforms.map((platform) => (
                  <th key={platform}>
                    <div className="platforms__table-header--item">
                      <img src={platformIcons[platform]} alt={platform} />
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="platforms__table-body">
              {supportMatrix.map(({ protocol, ...items }, index) => (
                <tr className="platforms__table-row" key={index}>
                  <th className="platforms__table-body-title">{protocol}</th>
                  {Object.values(items).map((item, i) => (
                    <td className="platforms__table-ceil" key={i}>{item ? <img src={check} alt="check" /> : <img src={cross} alt="cross" />}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
