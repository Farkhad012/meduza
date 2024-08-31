import React from 'react';
import './styles.scss';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  color: 'purple' | 'blue' | 'white';
  text: string;
  textColor?: string;
  fontSize?: number;
  border?: 'border' | '';
  width?: number; 
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button', 
  color,
  text,
  textColor,
  border = '', 
  fontSize,
  onClick,
  width
}) => {
  const buttonStyle = {
    color: textColor,
    fontSize: fontSize ? `${fontSize}px` : undefined,
    width: width ? `${width}%` : undefined 
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${color} ${border}`}
      style={buttonStyle}
    >
      {text}
    </button>
  );
};
