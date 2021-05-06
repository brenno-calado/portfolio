import Blog from './pages/Blog';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/blog" component={ Blog } />
      <Route path="/projects" component={ Projects } />
      <Route exact path="/" component={ Home } />
    </Switch>
  );
}

export default App;
