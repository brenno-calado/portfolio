/* eslint-disable react/jsx-max-depth */
import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import MyContext from '../context/MyContext';
import { projects } from '../utils/variables.json';
import Perfil from '../assets/perfil_insta.jpg';

const Home = () => {
  const { skills, darkMode } = useContext(MyContext);
  const projectItem = `${darkMode ? 'dark-card' : 'light-card'} project-item`;
  const width = window.innerWidth;
  const THREE = 4;

  return (
    <article
      className="home"
    >
      <section
        className="resumee"
        style={ { height: width / 2 } }
      >
        <img
          className="profile"
          src={ Perfil }
          alt="brenno calado's profile"
        />
        <section className="description black" style={ { height: width / THREE } }>
          <h1>Brenno Calado Vieira de Melo Nascimento</h1>
          <span>
            <FormattedMessage
              id="welcome"
            />
          </span>
        </section>
      </section>
      <section id="background">
        <h2><FormattedMessage id="Background" /></h2>
      </section>
      <section id="skills" className="skills">
        <h2><FormattedMessage id="Skills" /></h2>
        { skills.map((skill) => <li key={ skill }><span>{ skill }</span></li>) }
      </section>
      <section id="experience">
        <h2><FormattedMessage id="Experience" /></h2>
      </section>
      <section id="projects">
        <h2><FormattedMessage id="Projects" /></h2>
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
      </section>
      <section id="contact">
        <h2><FormattedMessage id="Contact" /></h2>
      </section>
    </article>
  );
};

export default Home;
