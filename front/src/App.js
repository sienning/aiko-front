import React, { Component } from 'react';
import Accueil from './components/Accueil';
import 'semantic-ui-css/semantic.min.css';
import { Image, Icon } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import axios from 'axios';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import MdpOublie from './components/MdpOublie';

class App extends Component {
  state = {
    url: "",
    code: "",
  }

  componentDidMount() {
    let url = window.location.href;
    let code = url.replace("http://localhost:3000", "");
    if (code.length > 0) {
      code = code.replace("/?code=", "");
    }

    console.log("code : ", code);
    // this.connexionDiscord(code);
    // this.setState({
    //   url: url,
    //   code: code
    // })
  }

  connexionDiscord = async (code) => {
    // const headers = {
    //   'Authorization': 
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // };
    const data = {
      'client_id': "885505998972915724",
      'client_secret': "Kz44FQjQIhkA8GghyUJuL4U0cK5Qvd49",
      'grant_type': 'authorization_code',
      'code': code,
      'redirect_uri': "http://localhost:3000"
    }
    await axios.post("https://discord.com/api/v8/oauth2/token", data)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => { console.log(err) })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar">
            <div className="navbar-site-links">
              <div className="navbar-link navbar-logo" style={{ marginLeft: 100 }}>
                <Link to="/">
                  <Image src="./images/icon.png" size="mini" />
                </Link>
              </div>
              <div className="navbar-link">
                <Link to="/coaching">Le coaching Aiko</Link>
              </div>
              <div className="navbar-link">
                <Link to="/evenements">Évènements</Link>
              </div>
            </div>

            <div className="navbar-social-links" style={{ marginRight: 100 }}>
              <div className="navbar-link">
                <Link to="/login">Connexion</Link>
              </div>
              <div className="navbar-link">
                <Link to="/sign-in">Inscription</Link>
              </div>
              <div className="navbar-social">
                <a rel="noreferrer" target="_blank" href="https://discord.com/"><Icon name="youtube play" /></a>
              </div>
              <div className="navbar-social">
                <a rel="noreferrer" target="_blank" href="https://twitter.com/home"><Icon name="twitter" /></a>
              </div>
              <div className="navbar-social">
                <a rel="noreferrer" target="_blank" href="https://discord.gg/SXhDhU6nNg"><Icon name="discord" /></a>
              </div>
            </div>
          </nav>

          <Switch>
            <Route path="/about">
              <Accueil />
            </Route>
            <Route path="/login">
              <Connexion />
            </Route>
            <Route path="/sign-in">
              <Inscription />
            </Route>
            <Route path="/forgot-my-password">
              <MdpOublie />
            </Route>
            <Route path="/">
              <Accueil />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
