import React from 'react';

import {
  HeroContainer,
  LocationContainer,
  FeaturesContainer,
  ProtocolsContainer,
  AdvantagesContainer,
  PrivacySecurityContainer,
  PlatformsContainer
} from 'containers/HomeContainers';

import './styles.scss';

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroContainer />
      <LocationContainer />
      <FeaturesContainer />
      <ProtocolsContainer />
      <AdvantagesContainer />
      <PrivacySecurityContainer />
      <PlatformsContainer />
    </>
  )
}