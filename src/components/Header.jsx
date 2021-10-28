import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import LanguageModal from './LanguageModal';

const Header = () => {
  const [showHeader, setHeader] = useState(false);
  const [langs, setLangs] = useState(false);
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
            <Link
              className="App-header-link"
              to={ menu[link] }
              key={ link }
              onClick={ () => setHeader(!showHeader) }
            >
              <FormattedMessage id={ link } />
            </Link>
          ))
        }
        <button
          type="button"
          className="App-header-link"
          onClick={ () => setLangs(!langs) }
        >
          Language
        </button>
      </header>
      { langs ? <LanguageModal setLangs={ setLangs } /> : null}
    </>
  );
};

export default Header;
