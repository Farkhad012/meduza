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
  initialYDesktop = 0, initialYTablet = -250, initialYMobile = 0,
  initialRotateDesktop = -10, initialRotateTablet = -5, initialRotateMobile = -20
}) => {
  const spriteRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const stopTimeoutRef = useRef<number | null>(null);

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
      let lastTimestamp = 0;

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
        if (!lastTimestamp) lastTimestamp = timestamp;
        const delta = timestamp - lastTimestamp;

        if (delta >= (1000 / frameSpeed)) {
          frameIndex = (frameIndex + 1) % totalFrames;
          updateFrame();
          lastTimestamp = timestamp;
        }

        if (animationFrameRef.current !== null) {
          animationFrameRef.current = requestAnimationFrame(animateSprites);
        }
      };

      const startAnimatingSprites = () => {
        if (animationFrameRef.current === null) {
          animationFrameRef.current = requestAnimationFrame(animateSprites);
        }
      };

      preloadImages(spriteSheets).then(() => {
        setImagesLoaded(true);
        startAnimatingSprites();  
        gsap.to(element, {
          opacity: 1,
          duration: 3,
          ease: 'power2.out'
        });


        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth <= 1024;

        const docHeight = document.documentElement.scrollHeight;
        const winWidth = window.innerWidth;

        const startX = isMobile ? -winWidth * 0.4 : (isTablet ? -winWidth * 0.2 : initialXDesktop);
        const startY = isMobile ? initialYMobile : (isTablet ? initialYTablet : initialYDesktop);
        const moveX = isMobile ? 0.5 * winWidth : (isTablet ? 0.45 * winWidth : 0.45 * winWidth);
        const finalY = isMobile ? docHeight - window.innerHeight / 2 * 0.95 : (isTablet ? 0.95 * docHeight : 0.97 * docHeight);
        const initialRotate = isMobile ? initialRotateMobile : (isTablet ? initialRotateTablet : initialRotateDesktop);
        const finalRotate = isMobile ? -5 : (isTablet ? 0 : 20);

        gsap.set(element, { rotate: initialRotate, x: startX, y: startY, opacity: 0 });

        const scrollStart = isMobile ? 'top+=100 center' : isTablet ? 'top center-=350' : 'top center';
        const scrollEnd = `center+=${docHeight - window.innerHeight}`;
        const scrubTime = 11;

        const zigzagMovement = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: scrollStart,
            end: scrollEnd,
            scrub: scrubTime,
            markers: false
          }
        });

        const movementYModifier = isMobile ? 45 : 50;
        const movementYFrequency = isMobile ? 6 * (2 * Math.PI) / (finalY * 0.4) : 0.018;


        if (isMobile) {
          const firstPhaseDuration = finalY * 0.4 / 1000;
          const secondPhaseDuration = finalY * 0.4 / 1000;
          const thirdPhaseDuration = finalY * 0.2 / 1000;

          zigzagMovement
            .to(element, {
              x: moveX,
              y: finalY * 0.4,
              duration: firstPhaseDuration,
              ease: 'none',
              modifiers: {
                y: gsap.utils.unitize(y => {
                  const amplitude = movementYModifier;
                  const frequency = movementYFrequency;
                  return y + amplitude * Math.sin(frequency * y);
                })
              }
            })
            .to(element, {
              x: startX + 50,
              y: finalY * 0.8,
              duration: secondPhaseDuration,
              ease: 'none',
              modifiers: {
                y: gsap.utils.unitize(y => {
                  const amplitude = movementYModifier;
                  const frequency = movementYFrequency;
                  console.log('sinus ', Math.sin(frequency * y))
                  return y + amplitude * Math.sin(frequency * y);
                })
              }
            })
            .to(element, {
              x: moveX * 0.55,
              y: finalY * 0.97,
              duration: thirdPhaseDuration,
              ease: 'none',
              modifiers: {
                y: gsap.utils.unitize(y => {
                  const amplitude = movementYModifier;
                  const frequency = movementYFrequency/2;
                  return y + amplitude * Math.sin(frequency * y);
                })
              }
            })
            .to(element, {
              rotate: finalRotate,
              ease: 'none',
            });
        } else {
          zigzagMovement.to(element, {
            x: moveX,
            y: finalY,
            rotate: finalRotate,
            ease: 'none',
            modifiers: {
              y: gsap.utils.unitize(y => {
                const amplitude = movementYModifier;
                const frequency = movementYFrequency;
                return y + amplitude * Math.sin(frequency * y);
              })
            }
          });
        }

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
