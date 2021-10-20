import { Route, Switch } from 'react-router';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Services from './components/Services';
import Menu from './Menu';





function App() {
  return (
    
      <div>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Home" component={Home}/>
          <Route path="/Services" component={Services}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
  );
}

export default App;
