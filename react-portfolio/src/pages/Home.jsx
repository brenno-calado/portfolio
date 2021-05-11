import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Home = () => {
  const { skills, toggleButton } = useContext(MyContext);

  return (
    <div className="home" onClick={ () => toggleButton() } onScroll={ () => toggleButton() }>
      <h1>Brenno Calado Vieira de Melo Nascimento</h1>
      <article className="resumee">
        <p>{`Hi! I'm a brazilian web developer curious about the world.
          Currently studying back-end development at Trybe. I have a bachelor's degree in Geography as maps are my passion since little.
          I've done a mapping study about the real state market in the historic center of Recife, Pernambuco.
          My college essay was a case study of Recife on how to become a smart city. I've founded a junior enterprise while in college
          and I've done data analysis for a ridesharing app.`}</p>
      </article>
      <article className="skills">
        <h2>Skills</h2>
        { skills.map((skill) => <li key={ skill }>{ skill }</li>) }
      </article>
    </div>
  );
}

export default Home;
