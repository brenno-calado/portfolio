import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [showHeader, setHeader] = useState(false);
  return (
    <>
      <button
        type="button"
        className={ `header-button ${showHeader && "with-header"}`}
        onClick={ () => setHeader(!showHeader)}
      >
        <svg width="30" height="30" version="1.1" viewBox="0 0 16.93 16.93" xmlns="http://www.w3.org/2000/svg">
              <g>
                  <path d="m1.697 0a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5h13.54a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5h-13.54z"/>
                  <path d="m1.697 6.967a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5h13.54a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5h-13.54z"/>
                  <path d="m1.697 13.93a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5h13.54a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5h-13.54z"/>
              </g>
          </svg>
      </button>
      <header className={`App-header ${ !showHeader && "hide-header"}`}>
        <Link to="/">Home</Link>
        <Link to="/blog" >Blog</Link>
        <Link to="/projects">Projects</Link>
      </header>
    </>
  );
}

export default Header;
