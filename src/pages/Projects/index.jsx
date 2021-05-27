import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => (
  <>
    <h1>Projects</h1>
    <li>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://docs.google.com/document/d/1CoJgS7dIN31suNtyBApJmmjoCGlBs8YnYPF3mzATRc8/edit?usp=sharing"
      >
        Map portfolio
      </a>
      <Link to="/portfolio/projects/shopping-cart">Shopping Cart</Link>
    </li>
  </>
);

export default Projects;
