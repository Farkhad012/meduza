import React from 'react';

import './styles.scss';

interface DashboardSectionTitletProps {
  text: string;
}

export const DashboardSectionTitle: React.FC<DashboardSectionTitletProps> = ({ text }) => {
  return (
    <>
      <h6 className="title">{text}</h6>
    </>
  );
};
