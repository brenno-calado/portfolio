import React from 'react';
import { projects } from '../../utils/variables.json';

const Projects = () => (
  <>
    <h1>Projects</h1>
    <ul className="project-list">
      {
        projects.map((project, index) => (
          <li key={ index }>
            <img src={ project.src } alt={ project.title } />
            <a
              target="_blank"
              rel="noreferrer"
              href={ project.link }
            >
              { project.title }
            </a>
            <p>
              { project.description }
            </p>
          </li>
        ))
      }
    </ul>
  </>
);

export default Projects;
