import React, { useState, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Context from '../context/MyContext';
import LOCALES from '../locales/locales';

const Header = () => {
  const { state } = useContext(Context);
  const [showHeader, setHeader] = useState(false);
  const menu = {
    Home: '/portfolio',
    Blog: '/portfolio/blog',
    Projects: '/portfolio/projects',
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
        <button type="button" disabled={ state.locale === LOCALES.english }>
          <FormattedMessage id="langs.english" />
        </button>
        <button type="button" disabled={ state.locale === LOCALES.portuguese }>
          <FormattedMessage id="langs.portuguese" />
        </button>
        <button type="button" disabled={ state.locale === LOCALES.spanish }>
          <FormattedMessage id="langs.spanish" />
        </button>
      </header>
    </>
  );
};

export default Header;
