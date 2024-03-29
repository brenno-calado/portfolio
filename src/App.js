import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import MyContext from './context/MyContext';
import './App.css';

function App() {
  const { darkMode } = useContext(MyContext);

  return (
    <main
      className={`${darkMode && 'dark-mode'}`}
    >
      <Header />
      <Switch>
        <Route path="/portfolio" component={Home} />
      </Switch>
    </main>
  );
}

export default App;
