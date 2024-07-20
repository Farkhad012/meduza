import React from 'react';

import { HeroContainer, LocationContainer } from 'containers/HomeContainers';

import './styles.scss';

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroContainer />
      <LocationContainer />
    </>
  )
}