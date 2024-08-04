import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ModalContext } from 'context/ModalContext';

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
  const { state } = useLocation()
  const { setOpenModal } = useContext(ModalContext);

  useEffect(() => {
    if (state && (state as any).showLoginModal) {
      setOpenModal(true);
    }
  }, [state]);

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