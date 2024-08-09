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
  width?: number; // Width as a number, which will be treated as pixels
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button', // Default type to 'button'
  color,
  text,
  textColor,
  border = '', // Default border to an empty string
  fontSize,
  onClick,
  width
}) => {
  const buttonStyle = {
    color: textColor,
    fontSize: fontSize ? `${fontSize}px` : undefined,
    width: width ? `${width}%` : undefined // Assume width is in pixels
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
