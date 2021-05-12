import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const skills = [
    'HTML', 'CSS', 'JS', 'React', 'Jest', 'Git', 'Bash', 'QGIS', 'Excel', 'AI', 'PS',
  ];
  const [darkMode, setDarkMode] = useState(false);

  return (
    <MyContext.Provider
      value={ {
        skills,
        darkMode,
        setDarkMode,
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
