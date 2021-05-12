import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import MyContext from './context/MyContext';
import MostDistantPlaces from './pages/Articles/MostDistantPlaces';
import './App.css';

function App() {
  const { showButton, darkMode, toggleButton } = useContext(MyContext);
  useEffect(() => {
    toggleButton();
  }, []);

  return (
    <main
      className={ `${darkMode && 'dark-mode'}` }
      onClick={ () => toggleButton() }
      onKeyUp={ () => toggleButton() }
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="switch"
      tabIndex={ 0 }
      aria-checked={ showButton ? 'true' : 'false' }
    >
      <Header />
      <Switch>
        <Route
          path="/portfolio/blog/most-distant-places"
          component={ MostDistantPlaces }
        />
        <Route path="/portfolio/blog" component={ Blog } />
        <Route path="/portfolio/projects" component={ Projects } />
        <Route exact path="/portfolio" component={ Home } />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
