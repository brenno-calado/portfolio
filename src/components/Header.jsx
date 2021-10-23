import React, { useState, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';
import locales from '../locales/locales';

const Header = () => {
  const { dispatch } = useContext(MyContext);
  const [showHeader, setHeader] = useState(false);
  const menu = {
    Home: '/portfolio',
    Blog: '/portfolio/blog',
    Projects: '/portfolio/projects',
  };

  const setLanguage = (locale) => {
    dispatch({
      type: 'setLocale',
      locale,
    });
  };

  return (
    <>
      <button
        type="button"
        className={
          `app-button header-button
          ${showHeader && 'with-header'}`
        }
        onClick={ () => setHeader(!showHeader) }
        aria-label="menu button"
      />
      <header className={ `App-header ${!showHeader && 'hide-header'}` }>
        {
          Object.keys(menu).map((link) => (
            <Link to={ menu[link] } key={ link } onClick={ () => setHeader(!showHeader) }>
              <FormattedMessage id={ link } />
            </Link>
          ))
        }
        {Object.keys(locales).map((lang) => (
          <button
            type="button"
            value={ locales[lang] }
            key={ lang }
            onClick={ () => setLanguage(locales[lang]) }
          >
            <FormattedMessage id={ `langs.${lang}` } />
          </button>
        ))}
      </header>
    </>
  );
};

export default Header;
