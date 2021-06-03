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
        <Link to="/portfolio" onClick={ () => setHeader(!showHeader) }>Home</Link>
        <Link to="/portfolio/blog" onClick={ () => setHeader(!showHeader) }>Blog</Link>
        <Link to="/portfolio/projects" onClick={ () => setHeader(!showHeader) }>
          Projects
        </Link>
      </header>
    </>
  );
};

export default Header;
