import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Home = () => {
  const { skills } = useContext(MyContext);

  return (
    <section
      className="home"
    >
      <h1>Brenno Calado Vieira de Melo Nascimento</h1>
      <div
        className="profile"
        alt="brenno calado's profile"
      />
      <article className="resumee">
        <p>
          {`Hi! I'm a brazilian fullstack developer curious about the world.
          Currently studying computer science and data scraping at Trybe.
          A few projects I've worked use BigBlueButton and ASAAS API.
          I'm also a Geographer as location data is one of my passions.
          I've done data gathering and analysis for a ridesharing app.
          I've done a mapping essay about Recife's historic center real state market.
          My college essay was a case study on how to make Recife become a smart city.
          I'm the founder CEO of the junior enterprise MapGeo Júnior.`}
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
