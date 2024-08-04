import React, { useState } from 'react';
import { dropdownArrow } from 'assets/images/icons';
import './styles.scss';

interface CustomDropdownProps {
  options: string[];
  onChange: (value: string) => void;
}

export const Dropdown: React.FC<CustomDropdownProps> = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  const handleHeaderClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="custom-dropdown">
      <div
        className="dropdown-header"
        onClick={handleHeaderClick}
        role="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <p>{selectedOption || ""}</p>
        <img
          src={dropdownArrow}
          className={`dropdown-icon ${isOpen ? 'open' : ''}`}
          alt="Dropdown arrow"
        />
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li
              key={option}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
              role="option"
              aria-selected={selectedOption === option}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
