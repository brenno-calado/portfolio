import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import { skills } from '../utils/variables.json';
import locales from '../locales/locales';

function Provider({ children, locale }) {
  const [darkMode, setDarkMode] = useState(false);
  const defaultLang = locales.english;

  const reducer = (state, action) => {
    switch (action.type) {
    case 'reset':
      return locale || defaultLang;
    case 'setLocale':
      return { ...state, action: action.locale };
    default:
      return locale || defaultLang;
    }
  };

  const [language, dispatch] = useReducer(reducer, defaultLang);

  return (
    <MyContext.Provider
      value={ {
        skills,
        darkMode,
        setDarkMode,
        language,
        dispatch,
      } }
    >
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired,
};

export default Provider;
