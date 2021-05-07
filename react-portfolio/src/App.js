import React from 'react';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <main className="App">
        <Header />
        <Switch>
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
