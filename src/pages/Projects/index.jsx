import React from 'react';
import { projects } from '../../utils/variables.json';

const Projects = () => (
  <>
    <h1>Projects</h1>
    <ul className="project-list">
      {
        projects.map((project, index) => (
          <li key={ index }>
            <a
              target="_blank"
              rel="noreferrer"
              href={ project[1] }
            >
              {project[0]}
            </a>
          </li>
        ))
      }
    </ul>
  </>
);

export default Projects;
