import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleDarkMode}
        className={`relative inline-flex items-center w-16 h-8 p-1 rounded-full transition-colors duration-300 ${
          darkMode ? 'bg-gray-600' : 'bg-yellow-400'
        }`}
      >
        {/* Circle to indicate the current mode */}
        <span
          className={`absolute w-6 h-6 rounded-full bg-white transform transition-transform duration-300 ${
            darkMode ? 'translate-x-8' : 'translate-x-0'
          }`}
        />
        {/* Sun icon, centered in the circle */}
        <span
          className={`absolute left-1 transition-opacity duration-300 flex items-center justify-center ${
            darkMode ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ width: '1.5rem', height: '1.5rem' }} // Adjust size as needed
        >
          <FaSun className="text-yellow-500" />
        </span>
        {/* Moon icon, centered in the circle */}
        <span
          className={`absolute right-1 transition-opacity duration-300 flex items-center justify-center ${
            darkMode ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ width: '1.5rem', height: '1.5rem' }} // Adjust size as needed
        >
          <FaMoon className="text-gray-200" />
        </span>
      </button>
    </div>
  );
};

export default DarkModeToggle;
