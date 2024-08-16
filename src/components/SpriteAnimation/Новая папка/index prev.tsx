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

        // Активируем элемент, делаем его видимым и начинаем анимацию
        gsap.to(element, { opacity: 1, y: 0, duration: 2, onComplete: () => {
          requestAnimationFrame(animateSprites);
        }});
      }).catch((error) => {
        console.error('Error preloading images:', error);
        setImagesLoaded(true);
        requestAnimationFrame(animateSprites);
      });

      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth <= 1024;

      const startX = isMobile ? initialXMobile : (isTablet ? initialXTablet : initialXDesktop);
      const startY = isMobile ? initialYMobile : (isTablet ? initialYTablet : initialYDesktop);
      const moveX = isMobile ? -100 : (isTablet ? 350 : 600);
      const finalY = isMobile ? 1400 : (isTablet ? 1400 : 5000);
      const initialRotate = isMobile ? initialRotateMobile : (isTablet ? initialRotateTablet : initialRotateDesktop);
      const finalRotate = isMobile ? -5 : (isTablet ? 0 : -5);

      gsap.set(element, { rotate: initialRotate, x: startX, y: startY, opacity: 0 }); // Устанавливаем начальное значение прозрачности 0

      const scrollStart = isMobile ? 'bottom' : 'top center';  // На мобилке start нужен позже
      const scrollEnd = isMobile ? `top+=${finalY + 500}` : `top+=${finalY}`; // То же с end

      const zigzagMovement = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: scrollStart,
          end: scrollEnd,
          scrub: 20,  // анимацию делаем плавную
          markers: false
        }
      });

      if (isMobile) {
        const halfDuration = finalY; // Сначала ведем модельку влево, а потом вправо

        // Анимация по X и Y
        zigzagMovement
          .to(element, {
            x: moveX,
            y: finalY / 2,
            duration: halfDuration,
            ease: 'sine.inOut'
          })
          .to(element, {
            x: startX,
            y: finalY,
            duration: halfDuration,
            ease: 'none'
          }, halfDuration); // Синхронизируем с первой анимацией по y

        // Анимация по Y
        zigzagMovement.to(element, {
          y: finalY,
          rotate: finalRotate,
          ease: 'sine.inOut',          
        });
      } else {
        // Для остальных устройств
        zigzagMovement.to(element, {
          x: moveX,          
          y: finalY,
          rotate: finalRotate,
          ease: 'none',
        });
      }

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
