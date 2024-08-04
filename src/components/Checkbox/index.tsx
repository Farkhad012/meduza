import React from 'react';

import './styles.scss';

interface CheckboxProps {
  text?: string;
  onChange: (checked: boolean) => void;
  checked?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  text,
  onChange,
  checked = false
}) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span
        className="custom-checkbox__box"
        style={{
          borderColor: checked ? "#C37BD9" : "#D9D9D9",
          backgroundColor: checked ? "#C37BD9" : "transparent",
        }}
      />
      <span className="custom-checkbox__text">{text}</span>
    </label>
  );
};
