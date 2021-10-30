import React, { useState, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Context from '../context/MyContext';

import LanguageModal from './LanguageModal';

const Header = () => {
  const [langs, setLangs] = useState(false);
  const { state } = useContext(Context);
  const menu = {
    Home: '/portfolio',
    Blog: '#blog',
    Projects: '#projects',
  };

  return (
    <>
      <header className="App-header">
        {
          Object.keys(menu).map((link) => (
            <Link
              className="App-header-link"
              to={ menu[link] }
              key={ link }
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
          { state.locale.toUpperCase() }
        </button>
      </header>
      { langs ? <LanguageModal setLangs={ setLangs } /> : null}
    </>
  );
};

export default Header;
