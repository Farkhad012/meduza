import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './styles.scss';
import { spriteSheets } from 'utils/spriteSheets';

interface SpriteAnimationProps {
  top: string;
  left?: string;
  right?: string;
  width: string;
  height: string;
  zIndex?: string;
  opacity?: string;
  frameCount: number;
  columns: number;
  rows: number;
  frameSpeed?: number;
  initialYDesktop?: number;
  initialYTablet?: number;
  initialYMobile?: number;
  initialXDesktop?: number;
  initialXTablet?: number;
  initialXMobile?: number;
  initialRotateDesktop?: number;
  initialRotateTablet?: number;
  initialRotateMobile?: number;
}

gsap.registerPlugin(ScrollTrigger);

export const SpriteAnimation: React.FC<SpriteAnimationProps> = ({
  top, left, right, width, height, zIndex, opacity, frameCount, columns, rows, frameSpeed = 1,
  initialXDesktop = 0, initialXTablet = 25, initialXMobile = 50,
  initialYDesktop = 0, initialYTablet = -250, initialYMobile = -500,
  initialRotateDesktop = -10, initialRotateTablet = -5, initialRotateMobile = -20
}) => {
  const spriteRef = useRef<HTMLDivElement>(null);

  const frameWidth = 8100 / columns;
  const frameHeight = 3840 / rows;

  useLayoutEffect(() => {
    if (spriteRef.current) {
      const element = spriteRef.current;
      const totalFrames = frameCount * spriteSheets.length;
      let frameIndex = 0;

      const updateFrame = () => {
        const sheetIndex = Math.floor(frameIndex / frameCount) % spriteSheets.length;
        const localFrame = frameIndex % frameCount;
        const row = Math.floor(localFrame / columns);
        const column = localFrame % columns;

        // Обновление спрайт-листа и кадра
        element.style.backgroundImage = `url(${spriteSheets[sheetIndex]})`;
        element.style.backgroundPositionX = `-${column * frameWidth}px`;
        element.style.backgroundPositionY = `-${row * frameHeight}px`;
      };

      // Определяем параметры в зависимости от ширины экрана
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth <= 1024; // Условие для планшетной версии

      const startX = isMobile ? initialXMobile : (isTablet ? initialXTablet : initialXDesktop);
      const startY = isMobile ? initialYMobile : (isTablet ? initialYTablet : initialYDesktop);
      const moveX = isMobile ? -250 : (isTablet ? 300 : 400); // Направление движения по X, можно скорректировать для планшета
      const finalY = isMobile ? 600 : (isTablet ? 1200 : 1450); // Конечное положение по Y
      const initialRotate = isMobile ? initialRotateMobile : (isTablet ? initialRotateTablet : initialRotateDesktop);
      const finalRotate = isMobile ? -5 : (isTablet ? 0 : 20); // Конечный наклон, можно скорректировать для планшета

      // Установка начального наклона и позиции
      gsap.set(element, { rotate: initialRotate, x: startX, y: startY });

      // Создание ScrollTrigger для движения медузы по диагонали и изменения угла поворота
      const scrollTriggerMovement = ScrollTrigger.create({
        trigger: element,
        start: 'top center',
        end: `top+=${finalY}`, // Двигаемся на 1450px по Y
        scrub: true,
        animation: gsap.to(element, {
          x: moveX,
          y: finalY,
          rotate: finalRotate,  // Поворот в конечное положение
          ease: 'none',
        }),
      });

      // Создание ScrollTrigger для смены кадров
      const scrollTriggerFrames = ScrollTrigger.create({
        trigger: element,
        start: 'top bottom',
        end: `+=${finalY * 3}`, // То же самое значение, что и в ScrollTriggerMovement
        scrub: true,
        onUpdate: (self) => {
          const scrollProgress = self.progress;
          frameIndex = Math.floor(scrollProgress * totalFrames) % totalFrames;
          updateFrame();
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        gsap.killTweensOf(element);
      };
    }
  }, [frameCount, columns, rows, frameSpeed, spriteSheets, frameWidth, frameHeight, initialYDesktop, initialYTablet, initialYMobile, initialXDesktop, initialXTablet, initialXMobile, initialRotateDesktop, initialRotateTablet, initialRotateMobile]);

  return (
    <div
      ref={spriteRef}
      className="sprite-animation"
      style={{
        top,
        left,
        right,
        width,
        height,
        zIndex,
        opacity,
        position: 'absolute', // Убедитесь, что спрайт остается в правильной позиции
        backgroundSize: `${frameWidth * columns}px ${frameHeight * rows}px`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        transformOrigin: 'center', // Поворот вокруг центра элемента
      }}
    ></div>
  );
};
