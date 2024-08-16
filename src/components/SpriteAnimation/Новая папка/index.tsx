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
      img.onerror = reject;
      img.src = src;
    });
  });
};

export const SpriteAnimation: React.FC<SpriteAnimationProps> = ({
  top,
  left,
  right,
  width,
  height,
  zIndex,
  opacity,
  frameCount,
  columns,
  rows,
  frameSpeed = 1,
  initialXDesktop = 0,
  initialXTablet = 25,
  initialXMobile = 50,
  initialYDesktop = 0,
  initialYTablet = -250,
  initialYMobile = -500,
  initialRotateDesktop = -10,
  initialRotateTablet = -5,
  initialRotateMobile = -20,
}) => {
  const spriteRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const frameWidth = 3560 / columns;
  const frameHeight = 2028 / rows;

  const updateFrame = (element: HTMLElement, frameIndex: number) => {
    const sheetIndex = Math.floor(frameIndex / frameCount) % spriteSheets.length;
    const localFrame = frameIndex % frameCount;
    const row = Math.floor(localFrame / columns);
    const column = localFrame % columns;

    element.style.backgroundImage = `url(${spriteSheets[sheetIndex]})`;
    element.style.backgroundPositionX = `-${column * frameWidth}px`;
    element.style.backgroundPositionY = `-${row * frameHeight}px`;
  };

  const animateSprites = (element: HTMLElement) => {
    let frameIndex = 0;
    let startTime = 0;

    const update = (timestamp: number) => {
      if (startTime === 0) startTime = timestamp;
      const elapsed = timestamp - startTime;
      frameIndex = Math.floor((elapsed / (1000 / frameSpeed)) % (frameCount * spriteSheets.length));
      updateFrame(element, frameIndex);
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  useLayoutEffect(() => {
    if (spriteRef.current) {
      const element = spriteRef.current;

      preloadImages(spriteSheets)
        .then(() => {
          setImagesLoaded(true);
          animateSprites(element);

          // Анимация появления медузы
          gsap.fromTo(
            element,
            { y: "-100%", opacity: 0 },
            { y: top, opacity: 1, duration: 2, delay: 1, ease: "sine.inOut" }
          );

          // Настройка ScrollTrigger для перемещений
          const createScrollAnimation = (triggerElement: string, xOffset: number, yOffset: number) => {
            return gsap.timeline({
              scrollTrigger: {
                trigger: triggerElement,
                start: "center top",
                end: "+=1200px bottom",
                scrub: 10,
                markers: false, // Уберите, если не нужны маркеры
                toggleActions: "resume pause reverse pause",
              },
            }).to(element, {
              x: `+=${xOffset}px`,
              y: `+=${yOffset}px`,
              duration: 3,
              ease: "sine.inOut",
            });
          };

          createScrollAnimation(".hero__title", 200, 1200);
          createScrollAnimation(".features__content-items", 500, 1500);
          createScrollAnimation(".advantages__items", -250, 1050);
          createScrollAnimation(".platforms__table", 0, 1050);

        })
        .catch((error) => {
          console.error("Error preloading images:", error);
          setImagesLoaded(true);
          if (spriteRef.current) animateSprites(spriteRef.current);
        });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        gsap.killTweensOf(element);
      };
    }
  }, [frameCount, columns, rows, frameSpeed, spriteSheets, frameWidth, frameHeight, top]);

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
        position: "absolute",
        backgroundSize: `${frameWidth * columns}px ${frameHeight * rows}px`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 0",
        transformOrigin: "center",
      }}
    >
      {!imagesLoaded && <div className="loading">Loading...</div>}
    </div>
  );
};
