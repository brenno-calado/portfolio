import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import { skills } from '../utils/variables.json';

function Provider({ children }) {
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
