import Accueil from './components/Accueil';
import 'semantic-ui-css/semantic.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>

      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Tournois</Link>
            </li>
            <li>
              <Link to="/about">Coaching</Link>
            </li>
            <li>
              <Link to="/users">Teams</Link>
            </li>
            <li>
              <Link to="/users">Profil</Link>
            </li>
          </ul>
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
