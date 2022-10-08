import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import MyContext from '../context/MyContext';
import { projects } from '../utils/variables.json';
import Perfil from '../assets/brennocvmn.jpeg';

const Home = () => {
  const { skills, darkMode, backgrounds } = useContext(MyContext);
  const projectItem = `${darkMode ? 'dark-card' : 'light-card'} project-item`;
  const width = window.innerWidth;
  const THREE = 4;
  const skillWidth = 250;

  const renderSkills = () => skills.map((skill) => (
    <div
      key={skill[0]}
      className="slide"
      style={{ width: `${skillWidth}px` }}
    >
      <img height="100%" src={skill[1]} alt={skill[0]} />
    </div>
  ));

  const renderBackgrounds = () => backgrounds.map((bg) => (
    <div className="background-card" key={bg.title}>
      <img src={bg.img} alt={<FormattedMessage id={bg.alt} />} />
      <h2><FormattedMessage id={bg.title} /></h2>
      <span className="subtitle"><FormattedMessage id={bg.subtitle} /></span>
    </div>
  ));

  return (
    <article className="home">
      <section className="resumee" style={{ height: width / 2 }}>
        <img className="profile" src={Perfil} alt="brenno calado's profile" />
        <section
          className="description black"
          style={{ height: width / THREE }}
        >
          <h1>Brenno Calado Vieira de Melo Nascimento</h1>
          <span>
            <FormattedMessage id="welcome" />
          </span>
        </section>
      </section>
      <section id="background" className="section">
        <h2>
          <FormattedMessage id="Background" />
        </h2>
        <div className="background">
          {renderBackgrounds()}
        </div>
      </section>
      <section id="skills" className="section">
        <h2>
          <FormattedMessage id="Skills" />
        </h2>
        <div className="slider">
          <div
            className="slider-track"
            style={{ width: `calc(${skillWidth}px * ${skills.length} * 2)` }}
          >
            {renderSkills()}
            {renderSkills()}
          </div>
        </div>
      </section>
      <section id="experience" className="section">
        <h2>
          <FormattedMessage id="Experience" />
        </h2>
      </section>
      <section id="projects" className="section">
        <h2>
          <FormattedMessage id="Projects" />
        </h2>
        <ul className="project-list">
          {projects.map((project) => (
            <li
              key={project.title}
              className={projectItem}
              onClick={() => window.open(project.link)}
              onKeyPress={(evt) => evt.key === 'Enter' && window.open(project.link)}
              role="menuitem"
            >
              <img src={project.src} alt={project.title} width="100%" />
              <a target="_blank" rel="noreferrer" href={project.link}>
                {project.title}
              </a>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <section id="contact" className="section">
        <h2>
          <FormattedMessage id="Contact" />
        </h2>
      </section>
    </article>
  );
};

export default Home;
