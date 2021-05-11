import React, { useContext } from 'react';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MyContext from './context/MyContext';
import './App.css';
import MostDistantPlaces from './pages/Articles/MostDistantPlaces';

function App() {
  const { darkMode, toggleButton } = useContext(MyContext);
  return (
    <>
      <main className={`${ darkMode && 'dark-mode'}`} onClick={ () => toggleButton()} onScroll={ () => toggleButton()}>
        <Header />
        <Switch>
          <Route path="/blog/most-distant-places" component={ MostDistantPlaces } />
          <Route path="/blog" component={ Blog } />
          <Route path="/projects" component={ Projects } />
          <Route exact path="/" component={ Home } />
        </Switch>
        <Footer />
      </main>
    </>
  );
}

export default App;
