import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import { skills, backgrounds } from '../utils/variables.json';
import LOCALES from '../locales/locales';

function Provider({ children, locale }) {
  const [darkMode, setDarkMode] = useState(false);
  const defaultLang = { locale: locale || LOCALES.english };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'reset':
        return defaultLang;
      case 'setLocale':
        return { ...state, locale: action.locale };
      default:
        return defaultLang;
    }
  };

  const [state, dispatch] = useReducer(reducer, defaultLang);

  return (
    <MyContext.Provider
      value={{
        skills,
        backgrounds,
        darkMode,
        setDarkMode,
        state,
        dispatch,
      }}
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
