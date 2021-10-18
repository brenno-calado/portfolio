import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import { projects } from '../../utils/variables.json';

const Projects = () => {
  const { darkMode } = useContext(MyContext);
  const projectItem = `${darkMode ? 'dark-card' : 'light-card'} project-item`;
  return (
    <>
      <h1>Projects</h1>
      <ul className="project-list">
        {
          projects.map((project, index) => (
            <li key={ index } className={ projectItem }>
              <img src={ project.src } alt={ project.title } width="100%" />
              <a
                target="_blank"
                rel="noreferrer"
                href={ project.link }
              >
                {project.title}
              </a>
              <p>
                {project.description}
              </p>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default Projects;
