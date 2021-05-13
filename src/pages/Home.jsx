import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import profile from '../images/perfil_insta.jpg';

const Home = () => {
  const { skills } = useContext(MyContext);

  return (
    <section
      className="home"
    >
      <h1>Brenno Calado Vieira de Melo Nascimento</h1>
      <img src={ profile } alt="brenno calado's profile" />
      <article className="resumee">
        <p>
          {`Hi! I'm a brazilian web developer curious about the world.
          Currently studying back-end development at Trybe. 
          I have a bachelor's degree in Geography as maps are my passion since little.
          I've done a mapping study about the real state market in the historic 
          center of Recife, Pernambuco. My college essay was a case study of Recife 
          on how to become a smart city. I've founded a junior enterprise while in college
          and I've done data analysis for a ridesharing app.`}
        </p>
      </article>
      <h2>Skills</h2>
      <article className="skills">
        { skills.map((skill) => <li key={ skill }><span>{ skill }</span></li>) }
      </article>
    </section>
  );
};

export default Home;
