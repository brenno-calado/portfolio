import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
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
          <FormattedMessage
            id="welcome"
          />
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
