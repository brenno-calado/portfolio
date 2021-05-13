import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Footer = () => {
  const { darkMode, setDarkMode } = useContext(MyContext);
  const moon = () => (
    <svg fill={ darkMode ? '#f3f3f3' : '#3f3f3f' } width="32" height="32" version="1.1" viewBox="0 0 8.467 8.467" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m4.634 1.816c1.103 0.2506 1.891 1.224 1.905 2.355s-0.7469 2.125-1.843
        2.404c-1.096 0.2796-2.241-0.228-2.769-1.228 2.411 0.2373 3.717-1.295 2.707-3.531z"
      />
    </svg>
  );

  return (
    <button
      className="app-button dark-mode-button"
      type="button"
      onClick={ () => setDarkMode(!darkMode) }
    >
      { moon() }
    </button>
  );
};

export default Footer;
