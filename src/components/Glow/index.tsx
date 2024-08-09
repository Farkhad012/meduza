import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './styles.scss';

interface GlowProps {
  top: string;
  left?: string;
  right?: string;
  width: string;
  height: string;
}

gsap.registerPlugin(ScrollTrigger);

export const Glow: React.FC<GlowProps> = ({ top, left, right, width, height }) => {
  const glowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (glowRef.current) {
      const element = glowRef.current;

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
        y: (index, target) => target.getBoundingClientRect().top * 0.5,
      });

      return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
      };
    }
  }, []);

  return (
    <div
      ref={glowRef}
      className="glow"
      style={{
        top,
        left,
        right,
        height,
        width,
      } as React.CSSProperties}
    ></div>
  );
};
