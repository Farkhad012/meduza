import React from "react";

import './styles.scss';

interface ButtonProps {
  color: 'purple' | 'blue';
  text: string;
}

const Button: React.FC<ButtonProps> = ({ color, text }) => {
  return (
    <button className={`button ${color}`}>
      {text}
    </button>
  );
};

export { Button };