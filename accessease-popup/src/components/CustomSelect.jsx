import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const CustomSelect = ({ options, value, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const selectedOption = options.find(option => option.value === value);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      <button
        type="button"
        className="flex items-center justify-between w-full bg-white/20 backdrop-blur-xl rounded-lg px-3 py-1.5 text-white/90 text-sm focus:ring-2 focus:ring-white/50 focus:outline-none hover:bg-white/30 transition-all duration-200 cursor-pointer"
        onClick={handleToggle}
      >
        <span>{selectedOption ? selectedOption.label : 'Select an option'}</span>
        <ChevronDown size={14} className={`text-white/70 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-20 mt-1 min-w-max bg-gray-800 border border-gray-700 rounded-xl shadow-xl overflow-hidden">
          <ul className="max-h-48 overflow-y-auto custom-scrollbar">
            {options.map((option) => (
              <li
                key={option.value}
                className={`px-3 py-2 text-sm text-white cursor-pointer hover:bg-gray-700 ${
                  option.value === value ? 'bg-gray-700' : ''
                } whitespace-nowrap`}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;