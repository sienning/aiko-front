import Accueil from './components/Accueil';
import 'semantic-ui-css/semantic.min.css';
import { Image } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <nav className="navbar">

          <div className="navbar-site-links">
            <div className="navbar-link navbar-logo">
              <Link to="/">
                <Image
                  src="./images/logo.png"
                  size="small"
                />
              </Link>
            </div>
            <div className="navbar-link" >
              <Link to="/">Tournois</Link>
            </div>
            <div className="navbar-link">
              <Link to="/about">Coaching</Link>
            </div>
            <div className="navbar-link">
              <Link to="/users">Teams</Link>
            </div>
            <div className="navbar-link">
              <Link to="/users">Profil</Link>
            </div>
          </div>


          <div className="navbar-social-links">
            <div className="navbar-social">
              <a rel="noreferrer" target="_blank" href="https://discord.com/">Discord</a>
            </div>
            <div className="navbar-social">
              <a rel="noreferrer" target="_blank" href="https://twitter.com/home">Twitter</a>
            </div>
          </div>

        </nav>

        <Switch>
          <Route path="/about">
            <Accueil />
          </Route>
          <Route path="/users">
            <Accueil />
          </Route>
          <Route path="/">
            <Accueil />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
