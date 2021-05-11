import React, { useState } from 'react';
import MyContext from './MyContext';
import PropTypes from 'prop-types';

function Provider({ children }) {
  const skills = ['HTML','CSS','JS','React','Jest','Git','Bash','QGIS','Excel','AI','PS'];
  const [darkMode,setDarkMode] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const toggleButton = () => {
    setShowButton(true);
    setTimeout(() => setShowButton(false), 3000)
  }

  return (
    <MyContext.Provider value={{
      skills,
      darkMode,
      showButton,
      setShowButton,
      setDarkMode,
      toggleButton,
    }}>
      {children}
    </MyContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
