import React from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router';

import { PathName } from 'constants/';

import { Glow, SpriteAnimation } from 'components';

import './styles.scss';
import { Circle } from 'components/Circle';

export const Main: React.FC = () => {

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <main className="main">
      <div className="container">



        <div className={`wrapper " ${currentPath === PathName.Home ? "landing" : "account"}`}>
          {currentPath === PathName.Home && (
            <>
              <Glow top="25%" left="10%" height="10vw" width="40vw" />
              <Glow top="50%" left="90%" height="10vw" width="40vw" />
              <Glow top="75%" left="10%" height="10vw" width="40vw" />

              <Circle top="1%" left="110%" size="40vw" opacity="0.5" />
              <Circle top="20%" left="10%" size="40vw" zIndex="0" parallaxSpeed={0.1} opacity="0.3" />
              <Circle top="17%" left="10%" size="7vw" zIndex="10" parallaxSpeed={0.4} />
              <Circle top="20%" left="80%" size="22vw" zIndex="0" opacity="0.5" parallaxSpeed={0.6} />
              <Circle top="35%" left="110%" size="30vw" zIndex="0" opacity="0.2" parallaxSpeed={0.4} />
              <Circle top="53%" left="60%" size="20vw" zIndex="0" opacity="0.5" parallaxSpeed={0.2} />
              <Circle top="67%" left="0%" size="30vw" zIndex="0" opacity="0.5" parallaxSpeed={0.2} />

              <SpriteAnimation
                top="27%"
                left="30%"
                width="270px"
                height="480px"
                frameCount={120}
                columns={30}
                rows={8}
                frameSpeed={1}
                initialRotateDesktop={-10}
                initialRotateMobile={-15}
                initialRotateTablet={-10}
                initialXTablet={-200}
                initialXDesktop={-150}
                initialYTablet={-150}
              />
            </>
          )}

          <Outlet />
        </div>
      </div>

    </main>
  )
}