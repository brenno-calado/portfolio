import React, { useContext } from 'react';
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
  const { darkMode } = useContext(MyContext);

  return (
    <main
      className={ `${darkMode && 'dark-mode'}` }
    >
      <Header />
      <Switch>
        <Route path="/portfolio" component={ Home } />
        <Route
          path="/portfolio/blog/most-distant-places"
          component={ MostDistantPlaces }
        />
        <Route path="/portfolio/blog" component={ Blog } />
        <Route path="/portfolio/projects" component={ Projects } />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
