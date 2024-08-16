import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { spriteSheets } from 'utils/spriteSheets';

import './styles.scss';

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
  initialRotateDesktop?: number;
  initialRotateTablet?: number;
  initialRotateMobile?: number;
  initialXDesktop?: number;
  initialXTablet?: number;
  initialXMobile?: number;
  initialYDesktop?: number;
  initialYTablet?: number;
  initialYMobile?: number;
}

export const SpriteAnimation: React.FC<SpriteAnimationProps> = ({
  top, left, right, width, height, zIndex, opacity, frameCount, columns, rows, frameSpeed = 1,
  initialRotateDesktop = 0, initialRotateTablet = 0, initialRotateMobile = 0,
  initialXDesktop = 0, initialXTablet = 0, initialXMobile = 0,
  initialYDesktop = 0, initialYTablet = 0, initialYMobile = 0,
}) => {
  const spriteRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const frameWidth = 3560 / columns;
  const frameHeight = 2028 / rows;

  const preloadImages = (images: string[]): Promise<void> => {
    return new Promise((resolve, reject) => {
      let loadedImages = 0;
      const totalImages = images.length;

      const checkLoaded = () => {
        if (loadedImages >= totalImages) {
          resolve();
        }
      };

      images.forEach((src) => {
        const img = new Image();
        img.onload = () => {
          loadedImages += 1;
          checkLoaded();
        };
        img.onerror = (error) => {
          reject(error);
        };
        img.src = src;
      });
    });
  };

  useLayoutEffect(() => {
    if (spriteRef.current) {
      const element = spriteRef.current;
      const totalFrames = frameCount * spriteSheets.length;
      let frameIndex = 0;
      let startTime = 0;

      const updateFrame = () => {
        const sheetIndex = Math.floor(frameIndex / frameCount) % spriteSheets.length;
        const localFrame = frameIndex % frameCount;
        const row = Math.floor(localFrame / columns);
        const column = localFrame % columns;

        element.style.backgroundImage = `url(${spriteSheets[sheetIndex]})`;
        element.style.backgroundPositionX = `-${column * frameWidth}px`;
        element.style.backgroundPositionY = `-${row * frameHeight}px`;
      };

      const animateSprites = (timestamp: number) => {
        if (startTime === 0) {
          startTime = timestamp;
        }
        const elapsed = timestamp - startTime;
        frameIndex = Math.floor((elapsed / (1000 / frameSpeed)) % totalFrames);
        updateFrame();
        requestAnimationFrame(animateSprites);
      };

      preloadImages(spriteSheets).then(() => {
        setImagesLoaded(true);
        // Начинаем анимацию спрайтов после загрузки изображений
        requestAnimationFrame(animateSprites);
      }).catch((error) => {
        console.error('Error preloading images:', error);
        setImagesLoaded(true);
        requestAnimationFrame(animateSprites);
      });

      // Добавляем анимацию с использованием ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);
      
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth <= 1024;
      const moveXMobile = 50;
      const moveXTablet = 100;
      const moveXDesktop = 400;
      const moveYMobile = 50;
      const moveYTablet = 100;
      const moveYDesktop = 1600;

      const startX = isMobile ? initialXMobile : (isTablet ? initialXTablet : initialXDesktop);
      const moveX = isMobile ? moveXMobile : (isTablet ? moveXTablet : moveXDesktop);

      const startY = isMobile ? initialYMobile : (isTablet ? initialYTablet : initialYDesktop);
      const moveY = isMobile ? moveYMobile : (isTablet ? moveYTablet : moveYDesktop);
      
      const initialRotate = isMobile ? initialRotateMobile : (isTablet ? initialRotateTablet : initialRotateDesktop);

      gsap.set(element, { rotate: initialRotate, x: startX, opacity: 1 }); // Устанавливаем начальное значение

      // Анимация при достижении блока .features
      gsap.fromTo(
        element,
        { rotate: initialRotate, x: startX },
        {
          rotate: initialRotate + 10,
          x: startX + moveX,
          y: startY + moveY,
          duration: 1,
          scrub: 5,
          ease: 'sine.inOut',
          scrollTrigger: {
            trigger: '.features__container',
            start: 'top center',
            end: 'top+=200 center',
            scrub: 5,
          }
        }
      ).eventCallback('onComplete', () => {
        gsap.to(element, {
          rotate: initialRotate,
          x: startX + moveX,
          duration: 1,
          ease: 'sine.inOut',
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        gsap.killTweensOf(element);
      };
    }
  }, [frameCount, columns, rows, frameSpeed, spriteSheets, frameWidth, frameHeight,
      initialRotateDesktop, initialRotateTablet, initialRotateMobile,
      initialXDesktop, initialXTablet, initialXMobile,
      initialYDesktop, initialYTablet, initialYMobile]);

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
        position: 'absolute',
        backgroundSize: `${frameWidth * columns}px ${frameHeight * rows}px`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        transformOrigin: 'center',
      }}
    >
    </div>
  );
};
