import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import LanguageModal from './LanguageModal';

const Header = () => {
  const [langs, setLangs] = useState(false);
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
          <FormattedMessage id="language" />
        </button>
      </header>
      { langs ? <LanguageModal setLangs={ setLangs } /> : null}
    </>
  );
};

export default Header;
