import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import MyContext from '../context/MyContext';
import { projects } from '../utils/variables.json';

const Home = () => {
  const { skills, darkMode } = useContext(MyContext);
  const projectItem = `${darkMode ? 'dark-card' : 'light-card'} project-item`;

  return (
    <article
      className="home"
    >
      <h1>Brenno Calado Vieira de Melo Nascimento</h1>
      <div
        className="profile"
        alt="brenno calado's profile"
      />
      <section className="resumee">
        <p>
          <FormattedMessage
            id="welcome"
          />
        </p>
      </section>
      <h2>Skills</h2>
      <section className="skills">
        { skills.map((skill) => <li key={ skill }><span>{ skill }</span></li>) }
      </section>
      <h2>Projects</h2>
      <ul className="project-list">
        {
          projects.map((project, index) => (
            <li
              key={ index }
              className={ projectItem }
              onClick={ () => window.open(project.link) }
              onKeyPress={ (evt) => evt.key === 'Enter' && window.open(project.link) }
              role="menuitem"
            >
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
    </article>
  );
};

export default Home;
