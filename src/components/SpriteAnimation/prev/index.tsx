import React, { useLayoutEffect, useRef, useState } from 'react';
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
  initialYDesktop = 0, initialYTablet = -250, initialYMobile = -300,
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

  function customEase(t: number) {
    if (t < 0.5)
      return -0.5 * (Math.cos(Math.PI * t) - 1);
    else return t;
  }

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
        gsap.to(element, {
          opacity: 1,  // Увеличиваем прозрачность
          duration: 3,  // Длительность анимации
          ease: 'power2.out'  // Используем плавное затухание для анимации
        });
        requestAnimationFrame(animateSprites);
      });

      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth <= 1024;

      // Получаем размеры окна и документа
      const docHeight = document.documentElement.scrollHeight;
      const winWidth = window.innerWidth;
      // Вычисляем позиции в процентах
      const startX = isMobile ? -winWidth * 0.4 : (isTablet ? -winWidth * 0.2 : initialXDesktop);
      const startY = isMobile ? initialYMobile * 0.7 : (isTablet ? initialYTablet : initialYDesktop);
      const moveX = isMobile ? 0.5 * winWidth : (isTablet ? 0.45 * winWidth : 0.45 * winWidth); // 10%, 30%, 60% ширины окна
      const finalY = isMobile ? docHeight * 0.86 : (isTablet ? 0.95 * docHeight : 0.95 * docHeight); // 70% и 120% высоты документа
      const initialRotate = isMobile ? initialRotateMobile : (isTablet ? initialRotateTablet : initialRotateDesktop);
      const finalRotate = isMobile ? -5 : (isTablet ? 0 : 20);

      // Устанавливаем начальное положение и нулевую прозрачность
      gsap.set(element, { rotate: initialRotate, x: startX, y: startY, opacity: 0 });

      const scrollStart = isMobile ? 'top+=100 center' : isTablet ? 'top center-=350' : 'top center';  // На мобилке start нужен позже
      const scrollEnd = `center+=${docHeight - window.innerHeight}`;  // Устанавливаем конец в нижнюю часть страницы

      const zigzagMovement = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: scrollStart,
          end: scrollEnd,
          scrub: 10,  // анимацию делаем плавную
          markers: false,
          toggleActions: 'play pause reverse pause'
        }
      });

      if (isMobile) {
        // Определяем длительности для каждого этапа
        const firstPhaseDuration = finalY * 1.2 / 1000;  // 40% пути
        const secondPhaseDuration = finalY * 1.5 / 1000; // 40% пути
        const thirdPhaseDuration = finalY * 0.8 / 1000;  // 20% пути

        // Анимация по X и Y
        zigzagMovement
          .to(element, {
            x: moveX,
            y: finalY * 0.3,
            duration: firstPhaseDuration,
            ease: customEase
          })
          .to(element, {
            x: -moveX * 0.7,
            y: finalY * 0.8,
            duration: secondPhaseDuration,
            ease: 'none'
          })
          .to(element, {
            x: moveX * 0.55,
            y: finalY,
            duration: thirdPhaseDuration,
            ease: 'sine.inOut'
          });

        // Анимация поворота
        zigzagMovement.to(element, {
          rotate: finalRotate,
          ease: 'none',
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
      {!imagesLoaded && <div className="loading">Loading...</div>}
    </div>
  );
};
