import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './styles.scss';

interface CircleProps {
  top: string;
  left?: string;
  right?: string;
  size: string;
  zIndex?: string;
  opacity?: string;
  parallaxSpeed?: number; // Добавляем пропс для скорости параллакса
}

gsap.registerPlugin(ScrollTrigger);

export const Circle: React.FC<CircleProps> = ({
  top,
  left,
  right,
  size,
  zIndex,
  opacity = '1', // Значение по умолчанию для opacity
  parallaxSpeed = 0.4, // Значение по умолчанию для скорости параллакса
}) => {
  const circleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (circleRef.current) {
      const element = circleRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true
        }
      });

      tl.to(element, {
        y: (index, target) => target.getBoundingClientRect().top * parallaxSpeed, // Используем парметр parallaxSpeed
        opacity: opacity, // Анимация opacity
      });

      return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
      };
    }
  }, [parallaxSpeed, opacity]);

  return (
    <div
      ref={circleRef}
      className="circle"
      style={{
        top,
        left,
        right,
        width: size,
        height: size,
        zIndex,
        opacity // Используем opacity
      } as React.CSSProperties}
    ></div>
  );
};
