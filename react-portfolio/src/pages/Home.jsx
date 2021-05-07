import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Home = () => {
  const { skills } = useContext(MyContext);

  return (
    <div className="home">
      <h1>Brenno Calado Vieira de Melo Nascimento</h1>
      <article className="resumee">
        <p>{`Brazilian web developer curious about the world`}</p>
        <p>{`Bachelor's degree in Geography for being in love with maps since little`}</p>
        <p>{`I've done a mapping study about the real state market in the historic center of Recife, Pernambuco`}</p>
        <p>{`became founder CEO of MapGeo junior enterprise at Federal University of Pernambuco`}</p>
        <p>{`I've done data analysis for a research required by a ridesharing app`}</p>
      </article>
      <article className="skills">
        <h2>Skills</h2>
        { skills.map((skill) => <li key={ skill }>{ skill }</li>) }
      </article>
    </div>
  );
}

export default Home;
