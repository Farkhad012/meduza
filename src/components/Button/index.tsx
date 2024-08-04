import React from 'react';

import './styles.scss';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  color: 'purple' | 'blue' | 'white';
  text: string;
  textColor?: string;
  fontSize?: number;
  border?: 'border' | '' ;
}

export const Button: React.FC<ButtonProps> = ({ type, color, text, textColor, border, fontSize, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${color} ${border}`}
      style={{ color: textColor, fontSize: fontSize }}
    >
      {text}
    </button>
  );
};