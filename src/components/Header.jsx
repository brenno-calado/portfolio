import React, { useState, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import Context from '../context/MyContext';

import LanguageModal from './LanguageModal';

const Header = () => {
  const [langs, setLangs] = useState(false);
  const { state } = useContext(Context);
  const menu = {
    Home: '/portfolio',
    Background: '/portfolio/#background',
    Skills: '/portfolio/#skills',
    Experience: '/portfolio/#experience',
    Projects: '/portfolio/#projects',
    Contact: '/portfolio/#contact',
  };

  return (
    <>
      <header className="App-header">
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
