import React, { useState } from 'react';
import MyContext from './MyContext';
import PropTypes from 'prop-types';

function Provider({ children }) {
  const skills = ['English','HTML','CSS','ECMAScript','React','Jest','Git','Bash','QGIS','Excel','Inkscape','Gimp'];
  const [darkMode,setDarkMode] = useState(false)
  return (
    <MyContext.Provider value={{
      skills,
      darkMode,
      setDarkMode,
    }}>
      {children}
    </MyContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
