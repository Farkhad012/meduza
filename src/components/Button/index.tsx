import React from 'react';

import './styles.scss';

interface ButtonProps {
  color: 'purple' | 'blue' | 'white';
  text: string;
  textColor?: string;
  fontSize?: number;
}

export const Button: React.FC<ButtonProps> = ({ color, text, textColor, fontSize }) => {
  return (
    <button className={`button ${color}`} style={{color: textColor, fontSize: fontSize}}>
      {text}
    </button>
  );
};