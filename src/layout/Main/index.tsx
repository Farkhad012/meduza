import React from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router';

import { PathName } from 'constants/';

import { Glow, SpriteAnimation } from 'components';
import { Circle } from 'components/Circle';

import './styles.scss';

let count = 0;

export const Main: React.FC = () => {

  const location = useLocation();
  const currentPath = location.pathname;

  count++;
  console.log(count)

  return (
    <main className="main">
      <div className="container">



        <div className={`wrapper " ${currentPath === PathName.Home ? "landing" : "account"}`}>
          {currentPath === PathName.Home && (
            <>
              <Glow top="25%" left="10%" height="10vw" width="40vw" />
              <Glow top="15%" left="90%" height="10vw" width="40vw" />
              <Glow top="50%" left="90%" height="10vw" width="40vw" />
              <Glow top="60%" left="0%" height="10vw" width="40vw" />
              <Glow top="90%" left="90%" height="10vw" width="40vw" />

              <Circle top="5%" left="105%" size="30vw" opacity="0.5" />
              <Circle top="10%" left="10%" size="20vw" zIndex="0" parallaxSpeed={0.1} opacity="0.3" />
              <Circle top="17%" left="10%" size="7vw" zIndex="10" parallaxSpeed={0.4} />
              <Circle top="30%" left="30%" size="16vw" zIndex="0" opacity="0.5" parallaxSpeed={0.6} />
              <Circle top="25%" left="90%" size="16vw" zIndex="0" opacity="0.5" parallaxSpeed={0.3} />
              <Circle top="35%" left="10%" size="10vw" zIndex="0" opacity="0.5" parallaxSpeed={0.6} />
              <Circle top="35%" left="110%" size="30vw" zIndex="0" opacity="0.2" parallaxSpeed={0.4} />
              <Circle top="50%" left="10%" size="10vw" zIndex="0" parallaxSpeed={0.4} />
              <Circle top="60%" left="80%" size="20vw" zIndex="0" opacity="0.5" parallaxSpeed={0.2} />
              <Circle top="67%" left="0%" size="30vw" zIndex="0" opacity="0.5" parallaxSpeed={0.2} />
              <Circle top="80%" left="95%" size="30vw" zIndex="0" opacity="0.5" parallaxSpeed={0.2} />
              <Circle top="88%" left="10%" size="18vw" zIndex="0" opacity="0.3" parallaxSpeed={0.4} />


              <SpriteAnimation
                top="3%"
                left="30%"
                width="178px"
                height="338px"
                frameCount={120}
                columns={20}
                rows={6}
                frameSpeed={20}
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