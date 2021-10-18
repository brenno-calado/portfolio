import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const Header = () => {
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
      </header>
    </>
  );
};

export default Header;
