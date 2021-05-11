import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const skills = [
    'HTML', 'CSS', 'JS', 'React', 'Jest', 'Git', 'Bash', 'QGIS', 'Excel', 'AI', 'PS',
  ];
  const [darkMode, setDarkMode] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const toggleButton = () => {
    const threeSeconds = 3000;
    setShowButton(true);
    setTimeout(() => setShowButton(false), threeSeconds);
  };

  return (
    <MyContext.Provider
      value={ {
        skills,
        darkMode,
        showButton,
        setShowButton,
        setDarkMode,
        toggleButton,
      } }
    >
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
