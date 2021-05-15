import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showHeader, setHeader] = useState(false);
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
        <Link to="/portfolio">Home</Link>
        <Link to="/portfolio/blog">Blog</Link>
        <Link to="/portfolio/projects">Projects</Link>
      </header>
    </>
  );
};

export default Header;
