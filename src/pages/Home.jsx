/* eslint-disable react/jsx-max-depth */
import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import MyContext from '../context/MyContext';
import { projects } from '../utils/variables.json';
import Perfil from '../assets/brennocvmn.jpeg';
import globe from '../assets/globe.svg';
import dev from '../assets/dev.svg';

const Home = () => {
  const { skills, darkMode } = useContext(MyContext);
  const projectItem = `${darkMode ? 'dark-card' : 'light-card'} project-item`;
  const width = window.innerWidth;
  const THREE = 4;
  const skillWidth = 250;

  const renderSkills = () => (
    skills.map((skill) => (
      <div key={ skill[0] } className="slide" style={ { width: `${skillWidth}px` } }>
        <img
          height="100%"
          src={ skill[1] }
          alt={ skill[0] }
        />
      </div>
    ))
  );

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
      <section id="background" className="section">
        <h2><FormattedMessage id="Background" /></h2>
        <div className="background">
          <div className="background-card">
            <img src={ globe } alt="menino colocando um pin no globo" />
            <h2>Geógrafo</h2>
            <span className="subtitle">UFPE - 2020</span>
          </div>
          <div className="background-card">
            <img src={ dev } alt="rapaz sentado com um notebook no colo" />
            <h2>Desenvolvedor Fullstack</h2>
            <span className="subtitle">Trybe - 2021</span>
          </div>
        </div>
      </section>
      <section id="skills" className="section">
        <h2><FormattedMessage id="Skills" /></h2>
        <div className="slider">
          <div
            className="slider-track"
            style={ { width: `calc(${skillWidth}px * ${skills.length} * 2)` } }
          >
            {renderSkills()}
            {renderSkills()}
          </div>
        </div>
      </section>
      <section id="experience" className="section">
        <h2><FormattedMessage id="Experience" /></h2>
      </section>
      <section id="projects" className="section">
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
      <section id="contact" className="section">
        <h2><FormattedMessage id="Contact" /></h2>
      </section>
    </article>
  );
};

export default Home;
