import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import Context from '../context/MyContext';
import LOCALES from '../locales/locales';

const Header = () => {
  const { state, dispatch } = useContext(Context);

  const menu = {
    Home: '/portfolio',
    Background: '#background',
    Skills: '#skills',
    Experience: '#experience',
    Projects: '#projects',
    Contact: '#contact',
  };

  return (
    <header className="App-header">
      <div>
        {
          Object.keys(menu).map((link) => (
            <a
              className="App-header-link"
              href={ menu[link] }
              key={ link }
            >
              <FormattedMessage id={ link } />
            </a>
          ))
        }
      </div>
      <div>
        {
          Object.values(LOCALES).map((locale) => (
            <button
              type="button"
              className="App-header-link"
              disabled={ state.locale === locale }
              onClick={ () => dispatch({ type: 'setLocale', locale }) }
              key={ locale }
            >
              { locale.toUpperCase() }
            </button>
          ))
        }
      </div>
    </header>
  );
};

export default Header;
